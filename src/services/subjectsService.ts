
export const GetAllSubjects = async () => {
    const baseUrl = 'http://localhost:8081/api/v1/materias';
    try {
        const response = await fetch(baseUrl);
        const subjects = await response.json();
        return subjects;
    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener las materias');
    }
}

export const GetSubjectById = async (id: string) => {
    const baseUrl = `http://localhost:8081/api/v1/materias/${id}`;
    try {
        const response = await fetch(baseUrl);
        const subject = await response.json();
        return subject;
    } catch (error) {
        console.log(error);
        throw new Error('Error al obtener la materia');
    }
}

export const PostSubject = async (subject: any) => {
    const baseUrl = 'http://localhost:8081/api/v1/materias';
    try {
        const response = await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(subject),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('Error al crear la materia');
    }
}

export const PutSubject = async (id: string, subject: any) => {
    const baseUrl = `http://localhost:8081/api/v1/materias/${id}`;
    try {
        const response = await fetch(baseUrl, {
            method: 'PUT',
            body: JSON.stringify(subject),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('Error al actualizar la materia');
    }
}

export const DeleteSubject = async (id: string) => {
    const baseUrl = `http://localhost:8081/api/v1/materias/${id}`;
    try {
        const response = await fetch(baseUrl, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        throw new Error('Error al eliminar la materia');
    }
}