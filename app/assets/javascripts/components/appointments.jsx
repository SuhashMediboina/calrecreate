class Appointments extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
              appointments: this.props.appointments,
              title: 'Set engagement',
              app_time: '9 AM tomorrow'
        }
    }

    handleUserInput (obj) {
        this.setState(obj);
    }

    handleFormSubmit () {
        var appointment = { title: this.state.title, app_time: this.state.app_time};
        $.post('/appointments', {appointment: appointment})
        .done(function(data) {
            this.addNewAppointment(data);
        }.bind(this));
    }

    addNewAppointment (appointment) {
        var appointments = React.addons.update(this.state.appointments, {$push: [appointment]});
        this.setState({appointments: appointments.sort(function(a,b) {
            return new Date(a.app_time) - new Date(b.app_time);
        })})
    }

    render() {
        return (
            <div>
                <AppointmentForm input_title={this.state.title} 
                input_app_time={this.state.app_time} 
                onUserInput={this.handleUserInput.bind(this)}
                onFormSubmit={this.handleFormSubmit.bind(this)}/>
                <AppointmentsList appointments={this.state.appointments} />
            </div>    
        )
    }
}