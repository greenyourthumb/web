import React from "react";

function Footer() {
    return (
        <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid">
                <div className="d-flex align-items-center justify-content-between small">
                    <div className="text-muted">Copyright &copy; GreenYourThumb.Org 2020</div>
                    <div>
                        <a href="/">Privacy Policy</a>
                                &middot;
                                <a href="http://localhost:3000/">Terms &amp; Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
