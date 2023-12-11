
export const GetAllSchedules = async() => {
    const baseUrl = 'http://localhost:8081/api/v1/horarios';
    try{
        const response = await fetch(baseUrl);
        const schedules = await response.json();
        return schedules;
    }
    catch(error){
        console.log(error);
        throw new Error('Error al obtener los horarios');
    }
}

export const GetOne = async(id: string) => {
    const baseUrl = `http://localhost:8081/api/v1/horarios/${id}`;
    try{
        const response = await fetch(baseUrl);
        const schedule = await response.json();
        return schedule;
    }
    catch(error){
        console.log(error);
        throw new Error('Error al obtener el horario');
    }
}

export const Post = async(schedule: any) => {
    const baseUrl = 'http://localhost:8081/api/v1/horarios';
    try{
        const response = await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(schedule),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error);
        throw new Error('Error al crear el horario');
    }
}

export const Put = async(id: string, schedule: any) => {
    const baseUrl = `http://localhost:8081/api/v1/horarios/${id}`;
    try{
        const response = await fetch(baseUrl, {
            method: 'PUT',
            body: JSON.stringify(schedule),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error);
        throw new Error('Error al actualizar el horario');
    }
}

export const Delete = async(id: string) => {
    const baseUrl = `http://localhost:8081/api/v1/horarios/${id}`;
    try{
        const response = await fetch(baseUrl, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error);
        throw new Error('Error al eliminar el horario');
    }
}

