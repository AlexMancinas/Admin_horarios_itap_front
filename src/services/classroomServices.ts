
export const GetAllClassrooms = async () => {
    const baseUrl = 'http://localhost:8081/api/v1/aulas';
    try {
        const response = await fetch(baseUrl);
        const classrooms = await response.json();
        return classrooms;
    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener las aulas');
    }
}


export const GetClassroomById = async (id: string) => {
    const baseUrl = `http://localhost:8081/api/v1/aulas/${id}`;
    try {
        const response = await fetch(baseUrl);
        const classroom = await response.json();
        return classroom;
    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener la aula');
    }
}


export const PostClassroom = async (classroom: any) => {
    const baseUrl = 'http://localhost:8081/api/v1/aulas';
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(classroom),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('Error al crear la aula');
    }
}


export const PutClassroom = async (id: string, classroom: any) => {
    const baseUrl = `http://localhost:8081/api/v1/aulas/${id}`;
    try {
        const response = await fetch(baseUrl, {
            method: 'PUT',
            body: JSON.stringify(classroom),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('Error al actualizar la aula');
    }
}


export const DeleteClassroom = async (id: string) => {
    const baseUrl = `http://localhost:8081/api/v1/aulas/${id}`;
    try {
        const response = await fetch(baseUrl, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('Error al eliminar la aula');
    }
}