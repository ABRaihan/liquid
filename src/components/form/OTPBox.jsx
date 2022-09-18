import { useEffect, useRef, useState } from 'react';
import style from '../../sass/components/form/otpBox.module.scss';

const OTPBox = ({ OTPValue, setOTPValue }) => {
  const numberOfBox = 4;
  const [focusIndex, setFocusIndex] = useState(0);
  const inputRef = useRef(null);
  const handleFocusChange = (value) => {
    setFocusIndex((currentFocus) => {
      if (value && currentFocus < numberOfBox) {
        return currentFocus + 1;
      }
      if (!value && currentFocus > 0) {
        return currentFocus - 1;
      }
    });
  };
  const handleChangeOTP = (index, event) => {
    if (event.nativeEvent.inputType === 'deleteContentBackward') return;
    let { value } = event.target;
    value = value.replace(/[^0-9]/g, '');
    setOTPValue((currentOTP) => {
      const cloneOTP = [...currentOTP];
      cloneOTP[index] = value.slice(value.length - 1);
      handleFocusChange(value);
      return cloneOTP;
    });
  };
  const handleKeyDown = (event) => {
    const { value } = event.target;
    if (event.keyCode === 8) {
      setFocusIndex((currentFocus) => {
        setOTPValue((currentOTP) => {
          const cloneOTP = [...currentOTP];
          cloneOTP[currentFocus] = '';
          return cloneOTP;
        });
        return currentFocus - 1;
      });
    }
  };
  const handlePasteOTP = (event) => {
    event.preventDefault();
    const copyData = event.clipboardData.getData('text');
    for (let i = 0; i < numberOfBox; i++) {
      setOTPValue((currentOTP) => {
        const cloneOTP = [...currentOTP];
        cloneOTP[i] = copyData[i] || '';
        return cloneOTP;
      });
    }
  };
  useEffect(() => {
    const { children } = inputRef.current;
    children[focusIndex]?.focus();
  }, [focusIndex]);
  return (
    <div ref={inputRef} className={style.otp__box}>
      {Array(numberOfBox)
        .fill(Math.random())
        .map((_, index) => (
          <input
            type="tel"
            key={Math.random()}
            className={style.otp__input}
            onChange={handleChangeOTP.bind(null, index)}
            onFocus={() => setFocusIndex(index)}
            onKeyDown={handleKeyDown}
            onPaste={handlePasteOTP}
            value={OTPValue[index] || ''}
          />
        ))}
    </div>
  );
};

export default OTPBox;
