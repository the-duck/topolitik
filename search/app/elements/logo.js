import React from 'react';

const Logo = ({
  className,
  color,
  width = '64px',
  height = 'auto'
}) => {
  return (
    <svg className={className} style={{width: width, height: height}} viewBox="0 0 150 75" version="1.1" xmlns="http://www.w3.org/2000/svg" >
        <path 
          fill={color} style={{ fill: color | 'white', fillRule: 'non-zero'}}
          d="M144.302,18.734c-2.604,-3.09 -4.846,-5.095 -6.061,-6.097c-0.157,-0.129 -0.296,-0.241 -0.417,-0.337c-5.605,-4.578 -12.756,-7.334 -20.557,-7.334c-10.05,0 -19.035,4.56 -25.002,11.722c-1.433,1.335 -3.9,1.424 -5.958,0.504c-1.985,-0.888 -7.538,-2.226 -11.307,-2.226c-3.769,0 -9.322,1.338 -11.307,2.226c-2.058,0.92 -4.525,0.831 -5.958,-0.504c-5.968,-7.162 -14.952,-11.722 -25.002,-11.722c-7.801,0 -14.952,2.756 -20.557,7.334c-0.121,0.096 -0.26,0.208 -0.417,0.337c-1.215,1.002 -3.457,3.007 -6.061,6.097c-5.332,6.326 -6.171,-3.147 -5.499,18.766c0,10.94 5.405,20.611 13.684,26.509c5.319,3.789 11.821,6.025 18.849,6.025c2.193,0 4.331,-0.226 6.401,-0.641c0.245,-0.049 0.49,-0.099 0.733,-0.153c0.956,-0.214 1.896,-0.472 2.819,-0.768c9.668,-3.103 17.366,-10.603 20.735,-20.147c1.932,-4.934 3.448,-9.984 4.513,-15.178c0.294,-1.431 0.202,-2.366 -1.123,-3.381c-2.268,-1.735 -2.053,-4.101 0.298,-5.688c0.792,-0.534 1.711,-1.012 2.635,-1.193c1.75,-0.343 3.504,-0.694 5.257,-0.694c1.752,0 3.506,0.351 5.257,0.694c0.924,0.181 1.843,0.659 2.634,1.193c2.352,1.587 2.566,3.953 0.299,5.688c-1.326,1.015 -1.418,1.95 -1.124,3.381c1.066,5.194 2.582,10.244 4.513,15.178c3.37,9.544 11.067,17.044 20.735,20.147c0.924,0.296 1.864,0.554 2.82,0.768c0.243,0.054 0.488,0.104 0.731,0.153c2.071,0.415 4.21,0.641 6.402,0.641c7.028,0 13.53,-2.236 18.849,-6.025c8.279,-5.898 13.685,-15.569 13.685,-26.509c0.672,-21.913 -0.167,-12.44 -5.499,-18.766Zm-111.908,-7.18c14.32,0 25.946,11.626 25.946,25.946c0,14.32 -11.626,25.946 -25.946,25.946c-14.32,0 -25.946,-11.626 -25.946,-25.946c0,-14.32 11.626,-25.946 25.946,-25.946Zm84.881,0c14.32,0 25.946,11.626 25.946,25.946c0,14.32 -11.626,25.946 -25.946,25.946c-14.32,0 -25.946,-11.626 -25.946,-25.946c0,-14.32 11.626,-25.946 25.946,-25.946Z" />
	  </svg>	
  );
}

export default Logo;