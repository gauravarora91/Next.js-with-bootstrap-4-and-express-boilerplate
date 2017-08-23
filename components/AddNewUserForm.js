import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import { Component } from 'react';
import Layout from '../components/Layout';

//import { registerUser } from '../actions/UserActions';
//import { FormattedMessage, FormattedNumber, defineMessages } from 'react-intl';
//import pageWithIntl from '../components/PageWithIntl';

// const messages = defineMessages({
//   about: {
//     id: 'about',
//     defaultMessage: 'An example app integrating React Intl with Next.js'
//   }
// });

class AddNewUserForm extends Component {
  render() {
    return (
      <div className="register-container m-t-30 m-b-30">
        <div className="d-flex justify-content-center flex-column">
          <img
            src="https://res.cloudinary.com/chalo/image/upload/v1488293333/demiumNew_w0yfwm.png"
            alt="logo"
            data-src="https://res.cloudinary.com/chalo/image/upload/v1488293333/demiumNew_w0yfwm.png"
            data-src-retina="https://res.cloudinary.com/chalo/image/upload/v1488293333/demiumNew_w0yfwm.png"
            width={256}
            height={58}
          />
          <h3>Register as a Demium traveller in just one step</h3>
          <p>
            Many new travelers? No problem! Download here our{' '}
            <strong>
              <a href="#">Excel template</a>
            </strong>{' '}
            and once filed, send the document with all new travelers to{' '}
            <a href="mailto:register@triporate.com" target="_BLANK">
              register@triporate.com
            </a>
          </p>
          <form id="form-register" className role="form" action="index.html">
            <div className="row">
              <div className="col-md-12">
                <h5>Your Personal Data</h5>
              </div>
            </div>
            <div className="row hidden">
              <div className="col-md-2">
                <div className="form-group form-group-default">
                  <label>Prefix</label>
                  <select className="cs-select cs-skin-slide" data-init-plugin="cs-select">
                    <option value="Web-safe">Mr</option>
                    <option value="Helvetica">Mrs</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group form-group-default required">
                  <label>First Name</label>
                  <input type="text" name="fname" placeholder="John" className="form-control" required />
                </div>
              </div>
              <div className="col-md-8">
                <div className="form-group form-group-default required">
                  <label>Last Names</label>
                  <input type="text" name="lname" placeholder="Smith" className="form-control" required />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="form-group form-group-default required">
                  <label>Date of Birth</label>
                  <input type="text" id="date" placeholder="dd/mm/yyyy" className="form-control" required />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group form-group-default">
                  <label>Mobile Phone</label>
                  <input type="text" name="lname" placeholder="+34 6XX XX XX" className="form-control" required />
                </div>
              </div>
              <div className="col-md-4">
                <div className="form-group form-group-default">
                  <label>DNI</label>
                  <input type="text" name="lname" placeholder="0000000X" className="form-control" required />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group form-group-default required">
                  <label>Demium's email</label>
                  <input
                    type="text"
                    name="uname"
                    placeholder="your-name@demiumstartups.com"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row hidden">
              <div className="col-md-12">
                <div className="form-group form-group-default input-group required">
                  <div className="form-input-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="We will send loging details to you"
                      name="email"
                      required
                    />
                  </div>
                  <div className="input-group-addon">@demiumstartups.com</div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group form-group-default required">
                  <label>Password</label>
                  <input
                    type="password"
                    name="pass"
                    placeholder="Minimum of 6 Characters"
                    className="form-control"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h5>Passport Details</h5>
                <p>We will need to be able to book international flights on your name.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group form-group-default">
                  <label>Passport Number</label>
                  <input type="text" name="fname" placeholder="John" className="form-control" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-default">
                  <label>Expiry Date</label>
                  <input type="text" id="date" placeholder="dd/mm/yyyy" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group form-group-default">
                  <label>Issuing Country</label>
                  <select className="cs-select cs-skin-slide" data-init-plugin="cs-select" style={{ width: '100%' }}>
                    <option />
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Åland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia, Plurinational State of</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">Congo, the Democratic Republic of the</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Côte d'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curaçao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard Island and McDonald Islands</option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran, Islamic Republic of</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">Korea, Democratic People's Republic of</option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Lao People's Democratic Republic</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territory, Occupied</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Réunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthélemy</option>
                    <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin (French part)</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten (Dutch part)</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan, Province of China</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="UM">United States Minor Outlying Islands</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela, Bolivarian Republic of</option>
                    <option value="VN">Viet Nam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="VI">Virgin Islands, U.S.</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-default">
                  <label>Nationality</label>
                  <select className="cs-select cs-skin-slide" data-init-plugin="cs-select" style={{ width: '100%' }}>
                    <option />
                    <option value="AF">Afghanistan</option>
                    <option value="AX">Åland Islands</option>
                    <option value="AL">Albania</option>
                    <option value="DZ">Algeria</option>
                    <option value="AS">American Samoa</option>
                    <option value="AD">Andorra</option>
                    <option value="AO">Angola</option>
                    <option value="AI">Anguilla</option>
                    <option value="AQ">Antarctica</option>
                    <option value="AG">Antigua and Barbuda</option>
                    <option value="AR">Argentina</option>
                    <option value="AM">Armenia</option>
                    <option value="AW">Aruba</option>
                    <option value="AU">Australia</option>
                    <option value="AT">Austria</option>
                    <option value="AZ">Azerbaijan</option>
                    <option value="BS">Bahamas</option>
                    <option value="BH">Bahrain</option>
                    <option value="BD">Bangladesh</option>
                    <option value="BB">Barbados</option>
                    <option value="BY">Belarus</option>
                    <option value="BE">Belgium</option>
                    <option value="BZ">Belize</option>
                    <option value="BJ">Benin</option>
                    <option value="BM">Bermuda</option>
                    <option value="BT">Bhutan</option>
                    <option value="BO">Bolivia, Plurinational State of</option>
                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                    <option value="BA">Bosnia and Herzegovina</option>
                    <option value="BW">Botswana</option>
                    <option value="BV">Bouvet Island</option>
                    <option value="BR">Brazil</option>
                    <option value="IO">British Indian Ocean Territory</option>
                    <option value="BN">Brunei Darussalam</option>
                    <option value="BG">Bulgaria</option>
                    <option value="BF">Burkina Faso</option>
                    <option value="BI">Burundi</option>
                    <option value="KH">Cambodia</option>
                    <option value="CM">Cameroon</option>
                    <option value="CA">Canada</option>
                    <option value="CV">Cape Verde</option>
                    <option value="KY">Cayman Islands</option>
                    <option value="CF">Central African Republic</option>
                    <option value="TD">Chad</option>
                    <option value="CL">Chile</option>
                    <option value="CN">China</option>
                    <option value="CX">Christmas Island</option>
                    <option value="CC">Cocos (Keeling) Islands</option>
                    <option value="CO">Colombia</option>
                    <option value="KM">Comoros</option>
                    <option value="CG">Congo</option>
                    <option value="CD">Congo, the Democratic Republic of the</option>
                    <option value="CK">Cook Islands</option>
                    <option value="CR">Costa Rica</option>
                    <option value="CI">Côte d'Ivoire</option>
                    <option value="HR">Croatia</option>
                    <option value="CU">Cuba</option>
                    <option value="CW">Curaçao</option>
                    <option value="CY">Cyprus</option>
                    <option value="CZ">Czech Republic</option>
                    <option value="DK">Denmark</option>
                    <option value="DJ">Djibouti</option>
                    <option value="DM">Dominica</option>
                    <option value="DO">Dominican Republic</option>
                    <option value="EC">Ecuador</option>
                    <option value="EG">Egypt</option>
                    <option value="SV">El Salvador</option>
                    <option value="GQ">Equatorial Guinea</option>
                    <option value="ER">Eritrea</option>
                    <option value="EE">Estonia</option>
                    <option value="ET">Ethiopia</option>
                    <option value="FK">Falkland Islands (Malvinas)</option>
                    <option value="FO">Faroe Islands</option>
                    <option value="FJ">Fiji</option>
                    <option value="FI">Finland</option>
                    <option value="FR">France</option>
                    <option value="GF">French Guiana</option>
                    <option value="PF">French Polynesia</option>
                    <option value="TF">French Southern Territories</option>
                    <option value="GA">Gabon</option>
                    <option value="GM">Gambia</option>
                    <option value="GE">Georgia</option>
                    <option value="DE">Germany</option>
                    <option value="GH">Ghana</option>
                    <option value="GI">Gibraltar</option>
                    <option value="GR">Greece</option>
                    <option value="GL">Greenland</option>
                    <option value="GD">Grenada</option>
                    <option value="GP">Guadeloupe</option>
                    <option value="GU">Guam</option>
                    <option value="GT">Guatemala</option>
                    <option value="GG">Guernsey</option>
                    <option value="GN">Guinea</option>
                    <option value="GW">Guinea-Bissau</option>
                    <option value="GY">Guyana</option>
                    <option value="HT">Haiti</option>
                    <option value="HM">Heard Island and McDonald Islands</option>
                    <option value="VA">Holy See (Vatican City State)</option>
                    <option value="HN">Honduras</option>
                    <option value="HK">Hong Kong</option>
                    <option value="HU">Hungary</option>
                    <option value="IS">Iceland</option>
                    <option value="IN">India</option>
                    <option value="ID">Indonesia</option>
                    <option value="IR">Iran, Islamic Republic of</option>
                    <option value="IQ">Iraq</option>
                    <option value="IE">Ireland</option>
                    <option value="IM">Isle of Man</option>
                    <option value="IL">Israel</option>
                    <option value="IT">Italy</option>
                    <option value="JM">Jamaica</option>
                    <option value="JP">Japan</option>
                    <option value="JE">Jersey</option>
                    <option value="JO">Jordan</option>
                    <option value="KZ">Kazakhstan</option>
                    <option value="KE">Kenya</option>
                    <option value="KI">Kiribati</option>
                    <option value="KP">Korea, Democratic People's Republic of</option>
                    <option value="KR">Korea, Republic of</option>
                    <option value="KW">Kuwait</option>
                    <option value="KG">Kyrgyzstan</option>
                    <option value="LA">Lao People's Democratic Republic</option>
                    <option value="LV">Latvia</option>
                    <option value="LB">Lebanon</option>
                    <option value="LS">Lesotho</option>
                    <option value="LR">Liberia</option>
                    <option value="LY">Libya</option>
                    <option value="LI">Liechtenstein</option>
                    <option value="LT">Lithuania</option>
                    <option value="LU">Luxembourg</option>
                    <option value="MO">Macao</option>
                    <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                    <option value="MG">Madagascar</option>
                    <option value="MW">Malawi</option>
                    <option value="MY">Malaysia</option>
                    <option value="MV">Maldives</option>
                    <option value="ML">Mali</option>
                    <option value="MT">Malta</option>
                    <option value="MH">Marshall Islands</option>
                    <option value="MQ">Martinique</option>
                    <option value="MR">Mauritania</option>
                    <option value="MU">Mauritius</option>
                    <option value="YT">Mayotte</option>
                    <option value="MX">Mexico</option>
                    <option value="FM">Micronesia, Federated States of</option>
                    <option value="MD">Moldova, Republic of</option>
                    <option value="MC">Monaco</option>
                    <option value="MN">Mongolia</option>
                    <option value="ME">Montenegro</option>
                    <option value="MS">Montserrat</option>
                    <option value="MA">Morocco</option>
                    <option value="MZ">Mozambique</option>
                    <option value="MM">Myanmar</option>
                    <option value="NA">Namibia</option>
                    <option value="NR">Nauru</option>
                    <option value="NP">Nepal</option>
                    <option value="NL">Netherlands</option>
                    <option value="NC">New Caledonia</option>
                    <option value="NZ">New Zealand</option>
                    <option value="NI">Nicaragua</option>
                    <option value="NE">Niger</option>
                    <option value="NG">Nigeria</option>
                    <option value="NU">Niue</option>
                    <option value="NF">Norfolk Island</option>
                    <option value="MP">Northern Mariana Islands</option>
                    <option value="NO">Norway</option>
                    <option value="OM">Oman</option>
                    <option value="PK">Pakistan</option>
                    <option value="PW">Palau</option>
                    <option value="PS">Palestinian Territory, Occupied</option>
                    <option value="PA">Panama</option>
                    <option value="PG">Papua New Guinea</option>
                    <option value="PY">Paraguay</option>
                    <option value="PE">Peru</option>
                    <option value="PH">Philippines</option>
                    <option value="PN">Pitcairn</option>
                    <option value="PL">Poland</option>
                    <option value="PT">Portugal</option>
                    <option value="PR">Puerto Rico</option>
                    <option value="QA">Qatar</option>
                    <option value="RE">Réunion</option>
                    <option value="RO">Romania</option>
                    <option value="RU">Russian Federation</option>
                    <option value="RW">Rwanda</option>
                    <option value="BL">Saint Barthélemy</option>
                    <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                    <option value="KN">Saint Kitts and Nevis</option>
                    <option value="LC">Saint Lucia</option>
                    <option value="MF">Saint Martin (French part)</option>
                    <option value="PM">Saint Pierre and Miquelon</option>
                    <option value="VC">Saint Vincent and the Grenadines</option>
                    <option value="WS">Samoa</option>
                    <option value="SM">San Marino</option>
                    <option value="ST">Sao Tome and Principe</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="SN">Senegal</option>
                    <option value="RS">Serbia</option>
                    <option value="SC">Seychelles</option>
                    <option value="SL">Sierra Leone</option>
                    <option value="SG">Singapore</option>
                    <option value="SX">Sint Maarten (Dutch part)</option>
                    <option value="SK">Slovakia</option>
                    <option value="SI">Slovenia</option>
                    <option value="SB">Solomon Islands</option>
                    <option value="SO">Somalia</option>
                    <option value="ZA">South Africa</option>
                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                    <option value="SS">South Sudan</option>
                    <option value="ES">Spain</option>
                    <option value="LK">Sri Lanka</option>
                    <option value="SD">Sudan</option>
                    <option value="SR">Suriname</option>
                    <option value="SJ">Svalbard and Jan Mayen</option>
                    <option value="SZ">Swaziland</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="SY">Syrian Arab Republic</option>
                    <option value="TW">Taiwan, Province of China</option>
                    <option value="TJ">Tajikistan</option>
                    <option value="TZ">Tanzania, United Republic of</option>
                    <option value="TH">Thailand</option>
                    <option value="TL">Timor-Leste</option>
                    <option value="TG">Togo</option>
                    <option value="TK">Tokelau</option>
                    <option value="TO">Tonga</option>
                    <option value="TT">Trinidad and Tobago</option>
                    <option value="TN">Tunisia</option>
                    <option value="TR">Turkey</option>
                    <option value="TM">Turkmenistan</option>
                    <option value="TC">Turks and Caicos Islands</option>
                    <option value="TV">Tuvalu</option>
                    <option value="UG">Uganda</option>
                    <option value="UA">Ukraine</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="GB">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="UM">United States Minor Outlying Islands</option>
                    <option value="UY">Uruguay</option>
                    <option value="UZ">Uzbekistan</option>
                    <option value="VU">Vanuatu</option>
                    <option value="VE">Venezuela, Bolivarian Republic of</option>
                    <option value="VN">Viet Nam</option>
                    <option value="VG">Virgin Islands, British</option>
                    <option value="VI">Virgin Islands, U.S.</option>
                    <option value="WF">Wallis and Futuna</option>
                    <option value="EH">Western Sahara</option>
                    <option value="YE">Yemen</option>
                    <option value="ZM">Zambia</option>
                    <option value="ZW">Zimbabwe</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h5>Loyalty Cards</h5>
                <p>Once we know them, we will use on each applicable booking.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group form-group-default">
                  <label>TRAVEL PROGRAM</label>
                  <select className="js-select is-placeholder" name="loyalty_program_a">
                    <option>Select program …</option>
                    &lt;
                    <option value="AA">AAdvantage-AA</option>
                    <option value="AR">Aerolíneas Plus-AR</option>
                    <option value="NZ">Airpoints-NZ</option>
                    <option value="OZ">Asiana Club-OZ</option>
                    <option value="CA">Aurora Rewards-CA</option>
                    <option value="J2">Azal Miles-J2</option>
                    <option value="ME">Blue Sky-ME</option>
                    <option value="SU">Bonus-SU</option>
                    <option value="EW">Boomerang Club-EW</option>
                    <option value="OK">Club Corsair-OK</option>
                    <option value="OU">Club Corsair-OU</option>
                    <option value="CM">ConnectMiles-CM</option>
                    <option value="CI">Dynasty Flyer-CI</option>
                    <option value="MU">EasternMiles-MU</option>
                    <option value="MF">Egret Club-MF</option>
                    <option value="VX">Elevate-VX</option>
                    <option value="MH">Enrich-MH</option>
                    <option value="EY">Etihad Guest-EY</option>
                    <option value="SK">EuroBonus-SK</option>
                    <option value="SV">EuroBonus-SV</option>
                    <option value="BA">Executive Club-BA</option>
                    <option value="TK">Fidelys-TK</option>
                    <option value="AY">Finnair Plus-AY</option>
                    <option value="LA">Flamingo Club-LA</option>
                    <option value="AC">FLY&amp;STAMP-AC</option>
                    <option value="VS">Flying Club-VS</option>
                    <option value="AI">Flying Returns-AI</option>
                    <option value="UL">FlySmiLes-UL</option>
                    <option value="OS">Frequent Flyer-OS</option>
                    <option value="QF">Frequent Flyer-QF</option>
                    <option value="GA">GarudaMiles-GA</option>
                    <option value="IB">Iberia Plus-IB</option>
                    <option value="BR">Infinity MileageLands-BR</option>
                    <option value="JL">JAL Mileage Bank-JL</option>
                    <option value="KL">Juneyao Club-KL</option>
                    <option value="KQ">Juneyao Club-KQ</option>
                    <option value="SN">KrisFlyer-SN</option>
                    <option value="SQ">KrisFlyer-SQ</option>
                    <option value="AV">LifeMiles-AV</option>
                    <option value="VN">Lotusmiles-VN</option>
                    <option value="LX">Loyal Wings-LX</option>
                    <option value="LY">Matmid Club-LY</option>
                    <option value="MS">Mboté!-MS</option>
                    <option value="H-MELIA">Melia Hoteles</option>
                    <option value="UA">Mileage Plus-UA</option>
                    <option value="LH">Miles and More-LH</option>
                    <option value="TO">Miles Plus-TO</option>
                    <option value="A3">Miles+Bonus-A3</option>
                    <option value="AZ">MilleMiglia-AZ</option>
                    <option value="NH">MilleMiglia-NH</option>
                    <option value="U2">My Happiness Reward-U2</option>
                    <option value="DY">Norwegian Reward-DY</option>
                    <option value="LO">Passport Club-LO</option>
                    <option value="QR">Privilege Club-QR</option>
                    <option value="WN">Rapid Rewards-WN</option>
                    <option value="TG">Royal Orchid Plus-TG</option>
                    <option value="RJ">Royal Plus-RJ</option>
                    <option value="JP">Saga Club-JP</option>
                    <option value="S7">SeaMiles-S7</option>
                    <option value="ZH">SeaMiles-ZH</option>
                    <option value="ET">ShebaMiles-ET</option>
                    <option value="AM">Sky Miles-AM</option>
                    <option value="CZ">Sky Pearl Club-CZ</option>
                    <option value="DL">SkyMiles-DL</option>
                    <option value="KE">Skypass-KE</option>
                    <option value="EK">Skywards-EK</option>
                    <option value="AF">SUMA-AF</option>
                    <option value="UX">SUMA-UX</option>
                    <option value="PZ">TACV Club-PZ</option>
                    <option value="CX">The Marco Polo Club-CX</option>
                    <option value="AB">topbonus-AB</option>
                    <option value="B6">TrueBlue-B6</option>
                    <option value="VA">Velocity-VA</option>
                    <option value="RO">Victoria-RO</option>
                    <option value="SA">Voyager-SA</option>
                    <option value="US">Wings-US</option>
                  </select>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-default">
                  <label>Your Number</label>
                  <input type="text" name="number" placeholder="XXXXXXX" className="form-control" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p>
                  <a href="#" className="text-info">
                    Add more
                  </a>
                </p>
              </div>
            </div>
            <div className="row m-t-10">
              <div className="col-lg-6">
                <p>
                  <small>
                    I agree to the{' '}
                    <a href="#" className="text-info">
                      Triporate's Terms
                    </a>{' '}
                    and{' '}
                    <a href="#" className="text-info">
                      Privacy
                    </a>.
                  </small>
                </p>
              </div>
              <div className="col-lg-6 text-right">
                <a href="#" className="text-info small">
                  Help? Contact Support
                </a>
              </div>
            </div>
            <div className="text-center m-b-30">
              <button className="btn btn-primary btn-cons m-t-10" type="submit">
                Register your account
              </button>
            </div>
          </form>
        </div>
        <style jsx>{`
          .register-container {
            height: 100%;
          }
        `}</style>
      </div>
    );
  }
}
//
// const mapDispatchToProps = dispatch => {
//   return {
//     registerUser: bindActionCreators(registerUser, dispatch)
//   };
// };

export default AddNewUserForm;
