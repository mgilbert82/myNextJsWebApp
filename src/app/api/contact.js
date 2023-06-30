import sgMail from "@sendgrid/mail";

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "INVALID_METHOD" });
    return;
  }

  //Variable
  const { name, surname, email, content } = req.body;

  if (!name || !surname || !email || !content) {
    res.status(400).json({ message: "INVALID_PARAMETER" });
    return;
  }

  //Email verification
  const pattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!pattern.test(email)) {
    res.status(400).send({ message: "INVALID_EMAIL_ADRESS" });
    return;
  }

  //Replace break space with space
  const message = content
    .replace(/\n/g, "<br>")
    .replace(/\r/g, "<br>")
    .replace(/\t/g, "<br>")
    .replace(/<(?!br\s*\/?)[^>]+>/g, "");

  //API KEY
  sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

  //Create Email
  const sendGridMail = {
    to: "michelgilbert@hotmail.fr",
    from: "michelgilbert@hotmail.fr",
    templateId: "d-305183e084dc4d90a4aecf7de02cfedc",
    dynamic_template_data: {
      name: name,
      surname: surname,
      email: email,
      content: message,
    },
  };

  //Send email
  (async () => {
    try {
      await sgMail.send(sendGridMail);
      res.status(200).json({ message: "MESSAGE_SENDED_SUCCESSFULLY !" });
    } catch (error) {
      res.status(500).json({ message: "ERROR_WITH_SENDGRID" });
    }
    return;
  })();
}
