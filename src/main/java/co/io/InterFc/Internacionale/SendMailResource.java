package co.io.InterFc.Internacionale;

import javax.mail.*;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;
import java.util.Properties;

@Path("/send-email")
public class SendMailResource {

    @POST
    @Path("/{name}/{matter}/{phone}/{email}/{text}")
    public Response sendMail(@PathParam("name") String name,
                             @PathParam("matter") String matter,
                             @PathParam("phone") String phone,
                             @PathParam("email") String email,
                             @PathParam("text") String text) throws AddressException {

        String remitente = "internaciaonleweb";
        Properties props = System.getProperties();
        props.put("mail.smtp.host", "smtp.gmail.com");  //El servidor SMTP de Google
        props.put("mail.smtp.user", remitente);
        props.put("mail.smtp.clave", "Maloka09");  //La clave de la cuenta
        props.put("mail.smtp.auth", "true");    //Usar autenticación mediante usuario y clave
        props.put("mail.smtp.starttls.enable", "true"); //Para conectar de manera segura al servidor SMTP
        props.put("mail.smtp.port", "587"); //El puerto SMTP seguro de Google

        javax.mail.Session session = Session.getDefaultInstance(props);
        MimeMessage message = new MimeMessage(session);
        try {
            message.setFrom(new InternetAddress(remitente));
            message.addRecipients(Message.RecipientType.TO, "internacionalefc2011@hotmail.com");   //Se podrían añadir varios de la misma manera
            message.setSubject("MENSAJE DESDE PAGINA WEB- INTERNACIONALE FC");
            message.setContent("<p>Estimad@s</p>\n" +
                    "<p>Notificacion: se ha enviado informacion desde pagina web</p>\n" +
                    "<br>"+ "\n" +
                    "<p>Nombre: " + name + "</p>\n" +
                    "<p>Asunto: " + matter + "</p>\n" +
                    "<p>Telefono : " + phone + "</p>\n" +
                    "<p>Correo electronico: " + email + "</p>\n" +
                    "<p>Cuerpo del mesaje: " + text + "</p>\n" +
                    "<p>Cordialmente.</p>\n" +
                    "<p><strong> Fundacion deportiva internacionale fc <br/></strong></p>\n" +
                    "<p>PRIVADO Y CONFIDENCIAL: Este correo electr&oacute;nico y todo documento adjunto pueden contener&nbsp; informaci&oacute;n de car&aacute;cter privado,&nbsp; o confidencial o que se encuentra&nbsp; protegida de otro modo contra divulgaci&oacute;n y est&aacute; destinado solamente para el uso del destinatario&nbsp; a quien fue dirigida la comunicaci&oacute;n</p>", "text/html");

            Transport transport = session.getTransport("smtp");
            transport.connect("smtp.gmail.com", remitente, "Maloka09");
            transport.sendMessage(message, message.getAllRecipients());
            transport.close();

            return Response.ok().build();

        } catch (MessagingException e) {

            e.printStackTrace();

            return Response.status(Response.Status.BAD_REQUEST).build();
        }

    }
}
