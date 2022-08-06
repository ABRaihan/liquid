import PropTypes from 'prop-types';

function AccountIcon({ color, height, width }) {
  return (
    <svg height={height} width={width} viewBox="0 0 16.5 22">
      <path
        id="Account"
        d="M-1274.333-331.916a6.417,6.417,0,0,0-6.417-6.416,6.417,6.417,0,0,0-6.417,6.416.916.916,0,0,1-.917.917.916.916,0,0,1-.917-.917,8.26,8.26,0,0,1,8.25-8.25,8.259,8.259,0,0,1,8.25,8.25.917.917,0,0,1-.917.917A.916.916,0,0,1-1274.333-331.916ZM-1286.25-347.5a5.5,5.5,0,0,1,5.5-5.5,5.5,5.5,0,0,1,5.5,5.5,5.5,5.5,0,0,1-5.5,5.5A5.506,5.506,0,0,1-1286.25-347.5Zm1.833,0a3.667,3.667,0,0,0,3.667,3.667,3.667,3.667,0,0,0,3.666-3.667,3.667,3.667,0,0,0-3.666-3.666A3.667,3.667,0,0,0-1284.417-347.5Z"
        transform="translate(1289 353)"
        fill={color}
      />
    </svg>
  );
}

export default AccountIcon;

AccountIcon.propTypes = {
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
};
AccountIcon.defaultProps = {
  color: '#1e272e',
  height: 22,
  width: 16.5,
};
