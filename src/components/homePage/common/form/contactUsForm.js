
const ContactUsForm = () => {
    return (
        <form action="">
        <div className="row">
            <div className="col-md-6">
                <div className="form-group">
                    <input type="text" name="name" className="form-control" placeholder="Name"/>
                </div>
            </div>
            <div className="col-md-6">
                <div className="form-group">
                    <input type="email" name="email" className="form-control" placeholder="Email"/>
                </div>
            </div>
        </div>

        <div className="form-group">
            <textarea className="form-control" rows="3" placeholder="Enter your message"></textarea>
        </div>

        

        <button type="submit" className="btn btn-success">Send message</button>
        {/* <a href="" className="btn btn-default">Reset</a> */}
    </form>
    )};
export default ContactUsForm;