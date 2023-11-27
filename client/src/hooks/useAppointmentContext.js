import { useContext } from 'react';
import { AppointmentContext } from '../context/AppointmentContext';

export const useAppointmentContext = () => {
    const context = useContext(AppointmentContext);

    if (!context) {
        throw Error('useAppointmentContext must be used inside an AppointmentContextProvider');
    }

    return context;
}