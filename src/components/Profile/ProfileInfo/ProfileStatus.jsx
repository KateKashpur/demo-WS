import React, {useEffect, useState} from 'react';

const ProfileStatus = ({status, updateStatus}) => {

    useEffect(() => {
        setStatus(status)
    }, [status]);

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(status);

    const deactivateEditMode = () => {
        setEditMode(false);
        updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

        return (
            <div>
                { editMode === false
                    ?   <div>
                            <span style={{fontStyle: "italic" }} onDoubleClick={() =>{setEditMode(true)} } > {status || "no status yet"}</span>
                        </div>

                    :   <div>
                            <input autoFocus={ true } onBlur={deactivateEditMode} onChange={onStatusChange} value={status} />
                        </div>
                }
            </div>
        );
};

export default ProfileStatus;