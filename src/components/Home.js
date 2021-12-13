import React from 'react';


export default function Home() {
    return (
        <div>
            <div id="startbg">
                <h1 style={{textAlign:"center",fontSize:"40px",fontFamily: 'Merriweather'}}>QR Code Generator and Scanner</h1>
                <div id="intro">
                    <div>
                        <h3>What is QR Code?</h3>
                        <p>
                            Short for Quick Response, QR codes are a type of barcode easily readable with digital devices like smartphones. They store information as a series of pixels in a square grid that can be read in two directions - top to bottom and right to left - unlike standard barcodes that can only be read top to bottom.
                        </p>
                        <p>
                        QR codes can store about 7,000 digits or around 4,000 characters, including punctuation and special characters. It can also encode information like phone numbers or internet addresses. The arrangement of each QR code varies depending on the information it contains, and that changes the arrangement of its black modules.
                        </p>
                        <p>When creating a code, you can add data to it, though it increases the code's structure and makes it more complex, and even personalize them. Additionally, a QR code's data structure contains duplicates, ensuring that even with 30% damage to the code, it will still be readable by a scanner.</p>
                    </div>
                    <div>
                        <h3>What can you do with a QR code?</h3>
                        <p>
                            Nowadays, QR codes are still used to track products and product information through a supply chain, but they are also used for so much more. You've likely used a QR code to view a menu, link a social profile or add friends to an account, board a flight, download an app, send and receive payments, access Wi-Fi, and authenticate your login details. The possibilities with QR codes are truly endless.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

