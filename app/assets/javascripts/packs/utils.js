import moment from 'moment'

export const formatDate = function(d) {
    return moment(d).format('MMMM DD YY, h:mm:ss a');
}
