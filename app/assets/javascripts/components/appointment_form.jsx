class AppointmentForm extends React.Component {
    handleChange(e) {
        obj = {};
        var name = e.target.name;
        obj[name] = e.target.value;
        this.props.onUserInput(obj);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onFormSubmit();
    }
    
    setAppTime(e) {
        var name = e.toDate();
        var obj = {};
        if(obj[name] = e.toDate()) {
            this.props.onUserInput(obj);
        }
    }
    
    render(){
        var inputProps = {
            name: 'app_time'
        };
        return (
            <div>
                <h2>Make an appointment</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input name="title" placeholder="Appointment title" 
                    value={this.props.input_title}
                    onChange={this.handleChange.bind(this)}></input>
                    <Datetime input={false} open={true} inputProps={inputProps} 
                    value={this.props.appt_time}
                    onChange={this.setAppTime.bind(this)}/>
                    <input type="submit" value="Make Appointment" className="submit-button"></input>
                </form>
            </div>
        )
    }
}
