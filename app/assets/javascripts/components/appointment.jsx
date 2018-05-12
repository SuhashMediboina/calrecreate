window.Appointment =  React.createClass({
    render: function() {
        return (
            <div>
                <h3>{this.props.appointment.title}</h3>
                <p>{formatDate(this.props.appointment.app_time)}</p>
            </div>
        )
    }
})
