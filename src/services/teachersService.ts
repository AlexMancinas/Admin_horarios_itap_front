
/**
 * 
 * @returns all teachers
 */
export const GetAllTeachers = async() => {
    const baseUrl = 'http://localhost:8081/api/v1/profesores';
    try{
        const response = await fetch(baseUrl);
        const teachers = await response.json();
        return teachers;
    }
    catch(error){
        console.log(error);
        throw new Error('Error al obtener los profesores');
    }
}


/**
 * 
 * @param id 
 * @returns one teacher
 */
export const GetOne = async(id: string) => {
    const baseUrl = `http://localhost:8081/api/v1/profesores/${id}`;
    try{
        const response = await fetch(baseUrl);
        const teacher = await response.json();
        return teacher;
    }
    catch(error){
        console.log(error);
        throw new Error('Error al obtener el profesor');
    }
}

/**
 * 
 * @param teacher 
 * @returns the teacher created
 */
export const Post = async(teacher: any) => {
    const baseUrl = 'http://localhost:8081/api/v1/profesores';
    try{
        const response = await fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(teacher),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error);
        throw new Error('Error al crear el profesor');
    }
}

/**
 * 
 * @param id 
 * @param teacher 
 * @returns the teacher updated
 */
export const Put = async(id: string, teacher: any) => {
    const baseUrl = `http://localhost:8081/api/v1/profesores/${id}`;
    try{
        const response = await fetch(baseUrl, {
            method: 'PUT',
            body: JSON.stringify(teacher),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error);
        throw new Error('Error al actualizar el profesor');
    }
}

/**
 * 
 * @param id 
 * @returns the teacher deleted
 */
export const Delete = async(id: string) => {
    const baseUrl = `http://localhost:8081/api/v1/profesores/${id}`;
    try{
        const response = await fetch(baseUrl, {
            method: 'DELETE'
        });
        const data = await response.json();
        return data;
    }
    catch(error){
        console.log(error);
        throw new Error('Error al eliminar el profesor');
    }
}
