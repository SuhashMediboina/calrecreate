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
        const name = 'app_time';
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
                <h2>Make a new appointment</h2>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                  <input name='title' placeholder='Appointment Title'
                    value={this.props.input_title}
                    onChange={(event) => this.handleChange(event)} />
        
                  <Datetime input={false} open={true} inputProps={inputProps}
                    value={this.props.appt_time}
                    onChange={(event) => this.setAppTime(event)} />
        
                  <input type='submit' value='Make Appointment' className='submit-button' />
                </form>        
            </div>
        )
    }
}
