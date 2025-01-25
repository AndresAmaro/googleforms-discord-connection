const APP_TITLE = "Envia notificaciones a discord";
const ENLACE_WEBHOOK = "YOUR_WEBHOOK_HERE";

function onFormSubmit(e) {
  try {
    
    let itemResponses = e.response.getItemResponses();
    let output = "# 📥 NUEVA ENTRADA DE FORMULARIO \n\n";  // This first line is used as the HEADER of the message.

    
    /*
      If email is not mandatory or is not requested
      the line above will return `null`.
      You can always comment it if you don't need it.
    */

    output += `**- E-Mail:** ${e.response.getRespondentEmail()} \n\n`

    for (const itemResponse of itemResponses) {
      output += `**- ${itemResponse.getItem().getTitle()}:** ${itemResponse.getResponse()} \n\n`;
    }

    var payload = {
      "content": output
    };

    var options = {
      method: 'post',
      contentType: 'application/json',
      payload: JSON.stringify(payload)
    };

    UrlFetchApp.fetch(ENLACE_WEBHOOK, options);

  } catch (err) {
    console.log(err);
  }
}