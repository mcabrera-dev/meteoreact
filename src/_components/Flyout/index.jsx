import React, { useEffect, useState } from 'react';

import {
  EuiFlyout,
  EuiFlyoutHeader,
  EuiFlyoutBody,
  EuiButton,
  EuiTitle,
  EuiDragDropContext,
  EuiDroppable,
  EuiDraggable,
  EuiPanel,
  EuiFlexItem,
  EuiFlexGroup,
  EuiIcon,
  euiDragDropReorder,
  EuiButtonIcon,
} from '@elastic/eui';
import { useDispatch, useSelector } from 'react-redux';
import { getMunicipalityWheatherCondition } from "../../actionCreators/weatherCondition";
import { removeSearch } from "../../actionCreators/user";


export const Flyout = () => {
  const dispatch = useDispatch();

  const loggedUser = useSelector(state => state.users.user);

  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const closeFlyout = () => setIsFlyoutVisible(false);
  const showFlyout = () => setIsFlyoutVisible(true);
  const [searches, setList] = useState(loggedUser.searches || []);
  const onDragEnd = ({ source, destination }) => {
    if (source && destination) {
      const items = euiDragDropReorder(searches, source.index, destination.index);

      setList(items);
    }
  };

  useEffect(() => {
    setList(loggedUser.searches || []);
  }, [loggedUser]);

  const onLoadSearch = (municipalities) => {

    dispatch(getMunicipalityWheatherCondition(municipalities))
  } 

  const onRemoveSearch = (search) => {
    dispatch(removeSearch(search))
  } 

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
          <EuiDragDropContext onDragEnd={onDragEnd}>
            <EuiDroppable droppableId="DROPPABLE_AREA" spacing="m" withPanel>
              {searches.map((search, idx) => (
                <EuiDraggable spacing="m" key={search.id} index={idx} draggableId={search.id}>
                  {(provided, state) => (
                    <EuiPanel hasShadow={state.isDragging}>
                      <EuiFlexGroup>
                        <EuiFlexItem grow={false}>
                          <div >
                            <EuiIcon type="grab" />
                          </div>
                        </EuiFlexItem>
                        <EuiFlexItem>{search.name}</EuiFlexItem>
                        <EuiFlexItem grow={false}>
                          <EuiButtonIcon
                            color={'success'}
                            onClick={() => onLoadSearch(search.municipalities)}
                            iconType="search"
                            aria-label="Next"
                          />
                        </EuiFlexItem>
                        <EuiFlexItem grow={false}>
                          <EuiButtonIcon
                            color={'danger'}
                            onClick={() => onRemoveSearch(search)}
                            iconType="trash"
                            aria-label="Next"
                          />
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </EuiPanel>
                  )}
                </EuiDraggable>
              ))}
            </EuiDroppable>
          </EuiDragDropContext>
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