import React from 'react'
import './Element.css'

function Element() {
  return (
    <>
    <div className="element__container">
        <div className='element__wrapper'>
            <ul className='element__items'>
                <p>Welcome to <b>HIRVE INTERNATIONAL</b>, your trusted partner in global trade.
                    As a new player in the export industry, we are driven by a passion for 
                    innovation, excellence, and creating meaningful business connections across borders.</p>
                <p>Why us??</p>
                <li>
                    <p>Innovative Approach:</p>
                    <p>As a new company, we embrace the latest technologies and strategies to streamline the export process, ensuring that your shipments are handled efficiently and securely.</p>
                </li>
                <li>
                    <p>Global Network:</p>
                    <p>With strong partnerships across key regions, we offer reliable access to international markets. </p>
                </li>
                <li>
                    <p>Commitment to Quality:</p>
                    <p>We may be new, but we prioritize quality in every product and service we offer, ensuring you receive the best.</p>
                </li>
                <div className='mission__impossible'>
                    <h3>Our Mission:</h3>
                    <p>Our mission is simple but powerful: to deliver nothing less than top-tier products and services that exceed the expectations of our global clients. We don’t just meet needs — we anticipate them, ensuring every shipment is executed flawlessly. Backed by a robust network of leading manufacturers, trusted suppliers, and expert logistics partners, we guarantee that your goods will reach their destination on time, every time, in pristine condition. When you choose HIRVE INTERNATIONAL, you're choosing excellence, precision, and unwavering reliability in the world of international trade.</p>
                </div>                
            </ul>
            <table className='table__class'>
                <tbody>
                    <tr>
                        <td colSpan="2">
                            <b>
                                <h2>Company Information</h2>
                            </b>
                        </td>
                    </tr>
                    <tr>
                        <td>Year of Establishment:</td>
                        <td>2024</td>
                    </tr>
                    <tr>
                        <td>Nature of Business:</td>
                        <td>Exporting</td>
                    </tr>
                    <tr>
                        <td>Industry:</td>
                        <td>Raw Material</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>10,Hemson Colony, 202 Hemson Apartments, Indore - 452001</td>
                    </tr>
                    <tr>
                        <td>Contact Number:</td>
                        <td>+91 9826277337</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>info@hirveinternational.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    </>
  )
}

export default Element