class AppointmentForm extends React.Component {
    handleChange(e) {
        obj = {};
        const name = e.target.name;
        obj[name] = e.target.value;
        this.props.onUserInput(obj);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onFormSubmit();
    }
    
    setAppTime(e) {
        const name = e.toDate();
        const obj = {};
        if(obj[name] = e.toDate()) {
            this.props.onUserInput(obj);
        }
    }
    
    render(){
        const inputProps = {
            name: 'app_time'
        };
        return (
            <div>
                <h2>Make an appointment</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <input name="title" placeholder="Appointment title" 
                    value={this.props.input_title}
                    onChange={(e) => this.handleChange(e)}></input>
                    <Datetime input={false} open={true} inputProps={inputProps} 
                    value={this.props.appt_time}
                    onChange={(e) => this.setAppTime(e)}/>
                    <input type="submit" value="Make Appointment" className="submit-button"></input>
                </form>
            </div>
        )
    }
}
