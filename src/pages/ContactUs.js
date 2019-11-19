import React, { useContext } from 'react';

import Image from '../components/shared/Image';

import { AppContext } from '../context/app';
import useFetch from '../hooks/useFetch';

import { renderText } from '../helpers';

import Modal from 'react-responsive-modal';

const ContactUs = () => {
  const { pages: {
    'contact-us': {
      title,
      subtitle,
      hero,
      form
    }
  } } = useContext(AppContext);
  
  const [open, setOpen] = React.useState(false)
  const [text, setText] = React.useState('תודה!')

  const Popup = (params) => {
    console.log(params)
    return (
    <div>
      <Modal open={params.isOpened} onClose={() => params.openFunc(false)} center>
        <h2 style={{
          'padding' : '10%',
          'text-align': 'center',
          'min-width': '200px' 
          }}>{params.text}</h2>
      </Modal>
    </div>
  )
}

  const { data, loading } = useFetch(form.url);

  const sendToBitrix = (event) => {
    event.preventDefault();

    var formNode = document.getElementById('contact_us_form');
    var data = new FormData(formNode);

    let bitrixURL = 'https://gobemark.info/rest/483/ya23gupm0zmpwajn/crm.lead.add';

    var leadData = {
      'TITLE': data.get('name:first')+' '+data.get('name:last'),
      'NAME' : data.get('name:first'),
      'LAST_NAME' : data.get('name:last'),
      'PHONE' : [{'VALUE': data.get('phone'), 'TYPE': 'HOME'}],
      'EMAIL' : [{'VALUE': data.get('email'), 'TYPE':'HOME'}],
      'COMPANY_TITLE' : data.get('company'),
      'POST' : data.get('position'),
      'COMMENTS' : data.get('comment'),
      'UF_CRM_1566463901338' : data.get('subscription')=='on'?'Y':'N',
      'UF_CRM_1566463931515' : data.get('seller')=='on'?'Y':'N'
    }

    fetch(bitrixURL, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrer: 'no-referrer',
      body: JSON.stringify({fields: leadData}),
    }).then((res) => {

      setOpen(true);

      if (res['ok']){
        setText('תודה!')

        for(let [name, value] of data){
          data.delete(name);
        }
      } else {
        setText('טעות!')
      }
    });
    return false;
  };

  return (
    <section className="contact-us">
    <Popup isOpened={open} openFunc={setOpen} text={text}/>
      <div className="container container--normal">
        <header className="contact-us__header">
          <h2 className="contact-us__title">{title}</h2>
          <h5 className="contact-us__subtitle">{renderText(subtitle)}</h5>
        </header>
        <main className="contact-us__main">
          {(loading === false) && (
            
            <form className="contact-form" id="contact_us_form" onSubmit={sendToBitrix}>
              <header className="contact-form__header">
                <h4 className="contact-form__title">שדות חובה *</h4>
              </header>
              <main className="contact-form__main">
                <label htmlFor="input:name:first" name="name:first" className="Label">שם פרטי *</label>
                <input name="name:first" className="Input" label="שם פרטי *" type="text" required id="input:name:first" /> 
                <label htmlFor="input:name:last" name="name:last" className="Label">שם משפחה *</label>
                <input name="name:last" className="Input" label="שם משפחה *" type="text" required id="input:name:last"/>
                <label htmlFor="input:phone" name="phone" className="Label">מספר טלפון *</label>
                <input name="phone" className="Input" label="מספר טלפון *" type="tel" required id="input:phone"/>
                <label htmlFor="input:email" name="email" className="Label">דוא"ל *</label>
                <input name="email" className="Input" label="דוא&quot;ל *" type="email" required id="input:email"/>
                <label htmlFor="input:company" name="company" className="Label">חברה *</label>
                <input name="company" className="Input" label="חברה *" type="text" required id="input:company"/>
                <label htmlFor="input:position" name="position" className="Label">תפקיד</label>
                <input name="position" className="Input" label="תפקיד" type="text" id="input:position"/>
                <label htmlFor="input:comment" name="comment" className="Label">הודעה</label>
                <textarea name="comment" className="Input Textarea" label="הודעה" type="textarea" rows="6" id="input:comment"></textarea>
                <label htmlFor="input:seller" name="seller" className="Label">מבקש\ת ליצור קשר עם איש מכירות</label>
                <input name="seller" className="Input" label="מבקש\ת ליצור קשר עם איש מכירות" type="checkbox" id="input:seller"/>
                <label htmlFor="input:subscription" name="subscription" className="Label">האם תרצו לקבל חדשות ועדכונים?</label>
                <input name="subscription" className="Input" label="האם תרצו לקבל חדשות ועדכונים?" type="checkbox" id="input:subscription"/>
                <input name="pay" className="Input Submit Button" label="שלח/י" id="input:pay" type="submit" value="שלח/י"/>
              </main>
            </form>
          )}
          <Image {...hero} />
        </main>
      </div>
    </section>
  );
};

export default ContactUs;