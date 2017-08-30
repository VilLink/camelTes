<%@ include file="/taglibs.jsp"%>
<!DOCTYPE HTML>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
	<head>
		<title>Order Management Ground Engaging Tool (${ctx})</title>
		<script language="javascript">
	        var _CONTEXT = "${ctx}";
	        var _URL_VALIDA_USUARIO =                   '<s:url namespace="/seguridad" action="autenticaUsuario" />';
	        var _URL_VALIDA_EXISTE_USUARIO =            '<s:url namespace="/seguridad" action="existeUsuarioLDAP" />';

	        function inIframe() {
	            try {
	                return window.self !== window.top;
	            } catch (e) {
	                return true;
	            }
	        }
	        if (inIframe()) {
	            try {
	                stop = true;
	                window.top.location = window.location;
	            } catch (e) {
	                alert('Error');
	                window.location='error';
	            }
	        }
	    </script>
		<link href="${ctx}/media/css/login.css"                                      rel="stylesheet" type="text/css" />		
		<link href="${ctx}/media/css/B2V.css"                                        rel="stylesheet" type="text/css" />
		<link href="${ctx}/media/css/layout.css"                                     rel="stylesheet" type="text/css" />
		<link href="${ctx}/media/css/Home.css"                                       rel="stylesheet" type="text/css" media="screen" />
		<link href="${ctx}/media/css/sitestyle.css"                                  rel="stylesheet" type="text/css" media="screen" />
		<link href="${ctx}/media/js/dhtmlgoodies_calendar/dhtmlgoodies_calendar.css" rel="stylesheet" type="text/css" media="screen"/>
	
		<!-- Links extJs -->
		<script type="text/javascript" src="${ctx}/resources/extjs4/ext-all.js"></script>
		<script type="text/javascript" src="${ctx}/resources/extjs4/locale/ext-lang-es.js?${now}"></script>
		<link   href="${ctx}/resources/extjs/resources/css/xtheme-gray.css" rel="stylesheet" type="text/css" />
		<script type="text/javascript">
		
			Ext.onReady(function()
			{
	             Ext.apply
	             (
	            	Ext.form.field.VTypes
	            	,{
	                 	password: function(val, field) 
	                 	{
	                     if (field.initialPassField) 
		                     {
		                         var pwd = field.up('form').down('#' + field.initialPassField);
		                         return (val == pwd.getValue());
		                     }
		                     return true;
	                 	}
	            	 ,passwordText: 'Las contrase\u00F1as no coinciden.'
	             	 }
	             );
	         
	             var dsUser = new Ext.form.TextField
	             (
	            	{
	                  id:'user'
	                 ,fieldLabel: 'Usuario'
	                 ,name: 'user'
	                 ,allowBlank: false
	                 ,blankText:'El nombre del usuario es un dato requerido'
	                 ,listeners:
	                 	{
	                      scope:this
	                     ,specialkey: function(f,e)
		                     {
		                         if(e.getKey()==e.ENTER)
		                         {                    
		                             validarUsuario();
		                         }
		                     }
	                 	}
	             	}
	             );
	             
	             var dsPassword = new Ext.form.TextField
	             (
	            	{
	                  id:'password'
	                 ,fieldLabel: 'Contrase\u00F1a'
	                 ,inputType: 'password'
	                 ,name: 'password'
	                 ,allowBlank: false
	                 ,blankText:'La contrase\u00F1a es un dato requerido'
	                 ,listeners:
		                 {
		                      scope:this
		                     ,specialkey: function(f,e)
			                     {
			                         if(e.getKey()==e.ENTER){                    
			                             validarUsuario();
			                         }
			                     }
	            			,change: function(field)
		            			{
			                         var confirmField = field.up('form').down('[name=passwordConfirm]');
			                         confirmField.validate();
			                     }
		                 }
	            	}
	             );
	         
	             var confirmPassword = new Ext.form.TextField
	             (
	            	{
	                  id:'confirmPassword'
	                 ,fieldLabel: 'Confirme su Contrase\u00F1a'
	                 ,inputType: 'password'
	                 ,vtype: 'password'
	                 ,name: 'passwordConfirm'
	                 ,allowBlank: false
	                 ,blankText:'La confirmaci\u00F3n de la contrase\u00F1a es un dato requerido'
	                 ,initialPassField: 'password'
	                 ,hidden: true
	                 ,disabled: true
	                 ,listeners:
		                 {
		                     scope:this
		                     ,specialkey: function(f,e)
			                     {
			                         if(e.getKey()==e.ENTER)
			                         {                    
			                             validarUsuario();
			                         }
			                     }
		                 }
	            	}
	             );
	               
	             var loginForm = new Ext.form.FormPanel
	             (
	            	{
	                  el:'formLogin'
	                 ,id: 'loginForm'
	                 ,title: 'Usuarios registrados'
	                 ,labelAlign: 'top'
	                 ,frame:true
	                 ,width: 270
	                 ,bodyPadding: 5
	                 ,items:
	                	 [
		                     dsUser
		                     ,dsPassword
		                     ,confirmPassword
	                 	 ]
	            	,buttons: 
	            		[
	            			{
		                      text: 'Log In'
		                     ,handler: function(btn, e)
			                     {
			                         validarUsuario();
			                     }
	                 		}
	            		]
	            	}
	             );
	                     
	             loginForm.render();
	             
	             function validarUsuario() {
	                 if (loginForm.form.isValid()) {
	                     
	                     loginForm.form.submit({
	                         url: _URL_VALIDA_EXISTE_USUARIO,
	                         waitMsg:'Procesando...',
	                         failure: function(form, action) {
	                             
	                             debug('failure', form, action);
	                             
	                             var msjError = "Error de comunicaci\u00F3n. Consulte a su administrador o intente m\u00E1s tarde."
	                             Ext.Msg.show({
	                                 title: 'Error', 
	                                 msg: !Ext.isEmpty(action.result.errorMessage) ? action.result.errorMessage : msjError, 
	                                 buttons: Ext.Msg.OK,
	                                 icon: Ext.Msg.ERROR
	                             });
	                         },
	                         success: function(form, action) {
	                             
	                             debug('success', form, action);
	                             debug('existeUsuarioLDAP=', action.result.params.existeUsuarioLDAP);
	                             debug('modoAutenticacionLDAP=', action.result.params.modoAutenticacionLDAP);
	                             debug('permiteAgregarUsuariosLdap=', action.result.params.modoAgregarUsuariosLDAP);
	                             
	                             // Si esta activo el modo autenticacion LDAP y no existe en LDAP:
	                             if(action.result.params.modoAutenticacionLDAP == 'true' && action.result.params.existeUsuarioLDAP != 'true') {
	                                     
	                                 // Si esta activo el modo de agregar usuario LDAP y
	                                 // el campo confirmacion de passwd esta oculto:
	                                 if(action.result.params.modoAgregarUsuariosLDAP == 'true' && loginForm.down('[name=passwordConfirm]').isHidden()) {
	                                         
	                                         dsPassword.reset();
	                                         loginForm.down('[name=passwordConfirm]').enable();
	                                         loginForm.down('[name=passwordConfirm]').show();
	                                         Ext.Msg.show({
	                                             title   : 'Aviso',
	                                             icon    : Ext.Msg.INFO,
	                                             msg     : 'Por motivos de seguridad y como \u00FAnica ocasi\u00F3n debe de renovar su contrase\u00F1a.',
	                                             buttons : Ext.Msg.OK
	                                         });
	                                         
	                                 } else {
	                                     validarPasswordYrol();
	                                 }
	                             } else {
	                                 validarPasswordYrol();
	                             }
	                         }
	                     });
	                     
	                 } else {
	                     Ext.Msg.show({
	                         title: 'Aviso',
	                         msg: 'Complete y Verifique la informaci\u00F3n requerida',
	                         buttons: Ext.Msg.OK,
	                         icon: Ext.Msg.WARNING
	                     });
	                 }
	             }
	             
	             function validarPasswordYrol(){
	                 loginForm.form.submit({
	                     url: _URL_VALIDA_USUARIO,
	                     waitMsg:'Procesando...',
	                     failure: function(form, action) {
	                         switch (action.failureType) {
	                             case Ext.form.action.Action.CONNECT_FAILURE:
	                                 Ext.Msg.show({title: 'Error', msg: 'Error de comunicaci\u00F3n', buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
	                                 break;
	                             case Ext.form.action.Action.SERVER_INVALID:
	                             case Ext.form.action.Action.LOAD_FAILURE:
	                                 var msgServer = Ext.isEmpty(action.result.errorMessage) ? 'Error interno del servidor, consulte a soporte' : action.result.errorMessage;
	                                 Ext.Msg.show({title: 'Error', msg: msgServer, buttons: Ext.Msg.OK, icon: Ext.Msg.ERROR});
	                                 break;
	                         }
	                     },
	                     success: function(form, action) {
	                         //_grabarEvento('SEGURIDAD','LOGIN');
// 	                         self.location.href = _CONTEXT+'/seleccionaRolCliente.action';
	                     }
	                 });
	             }
	         });
		 
		 </script>
		 <script type="text/javascript" src="${ctx}/resources/extjs4/base_extjs4.js?${now}"></script>
         <script type="text/javascript" src="${ctx}/resources/scripts/util/extjs4_utils.js?${now}"></script>
		 <script type="text/javascript" src="${ctx}/resources/scripts/util/custom_overrides.js?${now}"></script>
	</head>
	
		<body>
		<table width="984" cellspacing="0" cellpadding="0" border="0" align="center">
			<tbody>
			
				<tr>
					<td valign="top">
						<div class="headerWrap">
						
						<!-- Header Menu -->
							<div id="navGlobalRow">
								<a href="${ctx}/media/main/MainView.do">Inicio</a>
								<a href="http://www.officedepot.com.mx">http://www.officedepot.com.mx</a>
								<a href="${ctx}/media/login/Logout.do">Salir</a>
							</div>
							
						<!-- Logo & Vendor Info -->
							<div id="navLogoRow" style="padding:5px 0 7px 5px;">
								<div id="navLogo">
									<a href="${ctx}/media/"><img src="${ctx}/media/Images/nav_logo.gif"  alt="Office Depot Home" height="42" width="211" border="0" ></a>
								</div>	
									<div id="vendorInfo" align="right">	<br /><br /></div>	     
							</div>
							
							<div id="flags_country" style="padding:5px 0 2px 5px;left:215px;position:absolute;top:35px">
								<img  width="25" height="12"  alt="Office Depot BtoV Virtual México" src="${ctx}/media/Images/flags_stores/Mexico.jpg">
							</div>
							
							<div style="color:#999;font-size:12px;left:219px;position:absolute;top:55px">Internal App</div>
						</div>
					</td>
				</tr>
				
				<tr>
					<td valign="top" width="100%"></td>
				</tr>
				
				<tr><td><br /></td></tr>
				
				<tr height="300">
					<td>
						<div id="MainContainer">
							<div id="container">
								<form name="LoginForm" method="post" action="${ctx}/media/login/Login.do">
									<TABLE style="margin: 0px auto 0px auto;" cellspacing="0" cellpadding="0"><TR>
									<TD>
									
										<TABLE cellspacing="0">
											<TR><TD colspan="2" class="sectionTitle">Entrar a la aplicación</TD></TR>
									 		<TR><TD class="dots"></TD></TR>
									 		<TR><TD>&nbsp;</TD></TR>	
										</TABLE>
										
										<TABLE>
												 <tr valign="middle">
												 <td width="50">&nbsp;</td>
										           <td class="headlines" colspan="1">
										               <div id="formLogin"></div>
										           </td>
										        </tr>	
										</table>
									</TR>
											
											<TR>
												<TD>
													<TABLE cellspacing="0" cellpadding="0" width="420">
											  	 		<TR>
											  	 			<TD>&nbsp;</TD>
											  	 		</TR>
												 		<TR>
												 			<TD class="footerInfo">Copyright ®2017 por Office Depot de Mexico. Todos los Derechos <br />Reservados</TD>
												 		</TR> 
												 		<TR>
												 			<TD width="5">&nbsp;</TD>
												 		</TR>	
										  	 			<TR>
										  	 				<TD class="footerInfo">Recomendaciones para usar este sitio <br />version 10.0 o Superior. Microsoft Internet Explorer</TD>
										  	 			</TR> 
													</TABLE>																
										  		</TD>
									  		</TR>
										</table>
										<TD>
										</TR>	
									</TABLE>
								</form>
							</div>
						</div>
					</td>
				</tr>
			   <tr><td><br /></td></tr>
			    <tr>
				  	<td>
						<!-- MENU FOOTER -->
						<div id="footer" style="font-size:13px;">
								<div id="information">
									<div class="title">&nbsp;Información del sitio</div>
									&nbsp;<a href="http://www.officedepot.com/renderStaticPage.do?file=/companyinfo/international/international.jsp&template=companyInfo">Internacional</a><br />
									&nbsp;<a href="http://store.officedepot.com.mx/OnlineStore/Pages/Mercadotecnia/TerminosUso.jsp">Términos de Uso</a><br />
									&nbsp;<a href="http://store.officedepot.com.mx/OnlineStore/Pages/Mercadotecnia/PoliticaPrivacidad.jsp">Políticas de Privacidad</a>
								</div>
								<div id="services">
									<div class="title">Servicios</div>
									<a href="${ctx}/media/contact/contact.htm">Contacto</a>
									<br/>
									 <a href="http://www.dhl.com">DHL</a>
									,<a href="http://www.estafeta.com.mx">Estafeta</a>
									,<a href="http://www.fedex.com/mx/">Federal Express</a> 
								</div>
								<div id="about">
									<div class="title">Acerca de Office Depot</div>
									<a href="${ctx}/media/contact/ODStores.do?operationStrutAction=0">Localidades</a>
									<br/>
									<a href="http://store.officedepot.com.mx/OnlineStore/Pages/Mercadotecnia/Mision.jsp">Misión</a>
								</div>
						</div>
						<!-- Copyright -->
						<div class="copyright">
							<p class="dots"><!-- --></p>
							<p>
								&nbsp;Copyright ®2017 por Office Depot de Mexico. Todos los Derechos Reservados
							</p>
							<p class="faded">
								&nbsp;Recomendaciones para usar este sitio: Version 10.0 o Superior. Microsoft Internet Explorer
							</p>
						</div>
					</td>
				</tr>
		    </tbody>
        </table>
	</body>
</html>