window.AppointmentForm =  React.createClass({
    handleChange: function(e) {
        obj = {};
        var name = e.target.name;
        obj[name] = e.target.value;
        this.props.onUserInput(obj);
    },
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.onFormSubmit();
    },
    setAppTime: function(e) {
        var name = e.toDate();
        var obj = {};
        if(obj[name] = e.toDate()) {
            this.props.onUserInput(obj);
        }
    },
    render: function(){
        var inputProps = {
            name: 'app_time'
        };
        return (
            <div>
                <h2>Make an appointment</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="title" placeholder="Appointment title" 
                    value={this.props.input_title}
                    onChange={this.handleChange}></input>
                    <Datetime input={false} open={true} inputProps={inputProps} 
                    value={this.props.appt_time}
                    onChange={this.setAppTime}/>
                    <input type="submit" value="Make Appointment"></input>
                </form>
            </div>
        )
    }
})
