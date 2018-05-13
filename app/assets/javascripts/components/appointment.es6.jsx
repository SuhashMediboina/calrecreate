const Appointment =({appointment}) =>
    <div className="appointment" >
        <h3>{appointment.title}</h3>
        <p>{formatDate(appointment.app_time)}</p>
    </div>
