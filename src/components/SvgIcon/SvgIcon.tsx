import { FC } from 'react';

type SvgIconPropTypes = {
  className?: string;
  icon: 'plus' | 'edit' | 'delete' | 'close';
  onClick?: (e) => void;
};

const SvgIcon: FC<SvgIconPropTypes> = ({ className, icon, onClick }) => {
  className = `${className} svg-icon`;
  switch (icon) {
    case 'plus':
      return (
        <svg
          className={className}
          onClick={onClick}
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 448 512'
        >
          <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
        </svg>
      );
    case 'edit':
      return (
        <svg
          className={className}
          onClick={onClick}
          xmlns='http://www.w3.org/2000/svg'
          width='22.267'
          height='22.27'
          viewBox='0 0 22.267 22.27'
        >
          <path
            id='Path_327'
            data-name='Path 327'
            d='M24.632,1.391a3.415,3.415,0,0,0-4.831,0L6.258,14.934a.744.744,0,0,0-.2.334L4.282,21.7a.758.758,0,0,0,.934.934l6.43-1.78a.743.743,0,0,0,.334-.2L25.523,7.113a3.422,3.422,0,0,0,0-4.831ZM7.913,15.426,19,4.342,22.57,7.916,11.487,19ZM7.2,16.859l2.855,2.855-3.95,1.094ZM24.45,6.038l-.805.805L20.07,3.269l.805-.805a1.9,1.9,0,0,1,2.683,0l.891.891A1.9,1.9,0,0,1,24.45,6.038Z'
            transform='translate(-4.253 -0.39)'
          />
        </svg>
      );
    case 'delete':
      return (
        <svg
          className={className}
          onClick={onClick}
          xmlns='http://www.w3.org/2000/svg'
          height='1em'
          viewBox='0 0 448 512'
        >
          <path d='M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z' />
        </svg>
      );
    case 'close':
      return (
        <svg
          id='close_1_'
          className={className}
          onClick={onClick}
          data-name='close (1)'
          xmlns='http://www.w3.org/2000/svg'
          width='15.285'
          height='15.286'
          viewBox='0 0 15.285 15.286'
        >
          <path
            id='Path_330'
            data-name='Path 330'
            d='M.825,15.286a.787.787,0,0,1-.556-1.343L13.982.23a.786.786,0,0,1,1.112,1.112L1.382,15.055A.788.788,0,0,1,.825,15.286Zm0,0'
            transform='translate(-0.039)'
          />
          <path
            id='Path_331'
            data-name='Path 331'
            d='M14.538,15.286a.78.78,0,0,1-.556-.231L.269,1.343A.787.787,0,1,1,1.382.23L15.094,13.943a.787.787,0,0,1-.555,1.343Zm0,0'
            transform='translate(-0.039)'
          />
        </svg>
      );
  }
};

export default SvgIcon;
