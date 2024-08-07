import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function SweetSpinner() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");

    return (
        <ClipLoader
            color={color}
            loading={loading}
            cssOverride={{
                display: "block",
                margin: "200px auto",
                borderColor: "red",
            }}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
}

export default SweetSpinner;
