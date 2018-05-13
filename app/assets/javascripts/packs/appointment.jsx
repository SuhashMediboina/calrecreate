import React from 'react'
import moment from 'moment'
import { fortmatDate } from './utils'

export const Appointment =({appointment}) =>
    <div className="appointment" >
        <h3>{appointment.title}</h3>
        <p>{formatDate(appointment.app_time)}</p>
    </div>
