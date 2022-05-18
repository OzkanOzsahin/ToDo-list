const endPoint = `http://localhost:3000`;

const getTaskAPI = async () => {
    try {

        const response = await fetch(`${endPoint}/`, {
            method: "GET",
            body: JSON.stringify(),
            headers: {
                "Content-type": "application/json",
            },
            mode: `cors`,
            cache: `default`,
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        return err;
    }
};


//Post Task
export const addTaskAPI = async (task) => {
    try {
        const response = await fetch(`${endPoint}/`, {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                "Content-type": "application/json",
            },
            mode: `cors`,
            cache: `default`,
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        return err;
    }
};

//put Task
export const updateTaskAPI = async (id, task) => {
    try {
        const response = await fetch(`${endPoint}/${id}`, {
            method: "PUT",
            body: JSON.stringify(task),
            headers: {
                "Content-type": "application/json",
            },
            mode: `cors`,
            cache: `default`,
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        return err;
    }
};

//Delete task
export const deleteTaskAPI = async (id) => {
    try {
        const response = await fetch(`${endPoint}/${id}`, {
            method: "DELETE",
            body: JSON.stringify(),
            headers: {
                "Content-type": "application/json",
            },
            mode: `cors`,
            cache: `default`,
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        return err;

    }
};




