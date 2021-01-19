import React, { useState } from 'react';

import {
  EuiFlyout,
  EuiFlyoutHeader,
  EuiFlyoutBody,
  EuiButton,
  EuiText,
  EuiTitle,
} from '@elastic/eui';

export const Flyout = () => {
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);

  const closeFlyout = () => setIsFlyoutVisible(false);

  const showFlyout = () => setIsFlyoutVisible(true);

  let flyout;
  if (isFlyoutVisible) {
    flyout = (
      <EuiFlyout
        onClose={closeFlyout}
        size="s"
        aria-labelledby="flyoutSmallTitle">
        <EuiFlyoutHeader hasBorder>
          <EuiTitle size="m">
            <h2 id="flyoutSmallTitle">Mis búsquedas</h2>
          </EuiTitle>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          <EuiText>
            <p>
              In small flyouts, it is ok to reduce the header size to{' '}
              <code>s</code>.
            </p>
          </EuiText>
        </EuiFlyoutBody>
      </EuiFlyout>
    );
  }
  return (
    <div>
      <EuiButton onClick={showFlyout}>Mis búsquedas</EuiButton>

      {flyout}
    </div>
  );
}; 