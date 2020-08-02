import React, { useEffect } from 'react';

const TasksPage = () => {
    useEffect(() => {
        document.title = `Tasks`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <div>Tasks</div>;
};

export default TasksPage;
