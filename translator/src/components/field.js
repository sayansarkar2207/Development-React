import React from "react";

export default ({ label, value, onChange }) => {
    return (
        <div>
            <label>{label}</label>
            <input
                className="input"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};
