import React, { useState } from "react";

const CustomSlider = () => {
	const [state, setState] = useState(false);
	return <div onClick={() => setState(!state)}></div>;
};

export default CustomSlider;
