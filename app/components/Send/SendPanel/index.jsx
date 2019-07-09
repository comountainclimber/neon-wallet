// @flow
import React from 'react'
import { get } from 'lodash-es'

import Panel from '../../Panel'
import SendRecipientList from './SendRecipientList'
import PriorityFee from '../PriorityFee'
import SendPanelHeader from './SendPanelHeader'
import Button from '../../Button/Button'
import ConfirmSend from './ConfirmSend'
import SendSuccess from './SendSuccess'
import SendError from './SendError'
import ZeroAssets from '../../ZeroAssets/ZeroAssets'
import { pluralize } from '../../../util/pluralize'
import SendIcon from '../../../assets/icons/send.svg'
import EditIcon from '../../../assets/icons/edit.svg'

import styles from './SendPanel.scss'
import { isZero } from '../../../core/math'

type Props = {
  sendRowDetails: Array<*>,
  sendableAssets: Object,
  contacts: Object,
  showConfirmSend: boolean,
  pendingTransaction: boolean,
  sendSuccess: boolean,
  sendErrorMessage: string,
  sendError: boolean,
  noSendableAssets: boolean,
  txid: string,
  fees: number,
  handleAddPriorityFee: number => any,
  address: string,
  maxNumberOfRecipients: number,
  isWatchOnly?: boolean,
  resetViewsAfterError: () => any,
  resetViews: () => any,
  handleSubmit: boolean => any,
  handleSend: () => any,
  clearErrors: (index: number, field: string) => any,
  addRow: (row?: Object) => any,
  removeRow: (index: number) => any,
  updateRowField: (index: number, field: string, value: any) => any,
  handleEditRecipientsClick: () => any,
  showSendModal: (props: Object) => any,
  showImportModal: (props: Object) => any,
  pushQRCodeData: (data: Object) => any,
  calculateMaxValue: (asset: string, index: number) => string,
}

const shouldDisableSendButton = sendRowDetails =>
  sendRowDetails.some(
    detail => !detail.address || !detail.amount || isZero(detail.amount),
  )

const SendPanel = ({
  sendRowDetails,
  sendableAssets,
  updateRowField,
  addRow,
  removeRow,
  contacts,
  clearErrors,
  handleSubmit,
  handleSend,
  showConfirmSend,
  sendSuccess,
  sendError,
  sendErrorMessage,
  resetViewsAfterError,
  resetViews,
  noSendableAssets,
  txid,
  handleEditRecipientsClick,
  handleAddPriorityFee,
  fees,
  address,
  maxNumberOfRecipients,
  showSendModal,
  pushQRCodeData,
  pendingTransaction,
  calculateMaxValue,
  isWatchOnly,
  showImportModal,
}: Props) => {
  if (noSendableAssets) {
    return <ZeroAssets address={address} />
  }
  const maxRecipientsMet = sendRowDetails.length === maxNumberOfRecipients

  let content = (
    <form>
      <SendRecipientList
        sendRowDetails={sendRowDetails}
        sendableAssets={sendableAssets}
        removeRow={removeRow}
        updateRowField={updateRowField}
        contacts={contacts}
        clearErrors={clearErrors}
        showConfirmSend={showConfirmSend}
        calculateMaxValue={calculateMaxValue}
        isWatchOnly={isWatchOnly}
      />
      <div className={styles.priorityFeeContainer}>
        <PriorityFee
          availableGas={Number(get(sendableAssets, 'GAS.balance', 0))}
          handleAddPriorityFee={handleAddPriorityFee}
          fees={fees}
          disabled={shouldDisableSendButton(sendRowDetails)}
        />
      </div>
      <Button
        className={styles.generateTransactionButton}
        renderIcon={() => <EditIcon />}
        type="submit"
        disabled={shouldDisableSendButton(sendRowDetails)}
        onClick={() => handleSubmit(true)}
        id="generate-transaction-json"
      >
        Generate Transaction JSON
      </Button>
      {!isWatchOnly && (
        <Button
          primary
          className={styles.sendFormButton}
          renderIcon={() => <SendIcon />}
          type="submit"
          disabled={shouldDisableSendButton(sendRowDetails)}
          onClick={() => handleSubmit(false)}
          id="send-assets"
        >
          Send {pluralize('Asset', sendRowDetails.length)}{' '}
          {fees ? 'With Fee' : 'Without Fee'}
        </Button>
      )}
    </form>
  )

  if (showConfirmSend && !isWatchOnly) {
    content = (
      <form onSubmit={() => handleSend()}>
        <SendRecipientList
          sendRowDetails={sendRowDetails}
          sendableAssets={sendableAssets}
          removeRow={removeRow}
          updateRowField={updateRowField}
          contacts={contacts}
          clearErrors={clearErrors}
          showConfirmSend={showConfirmSend}
          calculateMaxValue={calculateMaxValue}
        />
        <ConfirmSend
          handleEditRecipientsClick={handleEditRecipientsClick}
          fees={fees}
          pendingTransaction={pendingTransaction}
        />
      </form>
    )
  }

  if (sendSuccess) {
    content = <SendSuccess txid={txid} sendRowDetails={sendRowDetails} />
  }

  if (sendError) {
    content = (
      <SendError
        resetViewsAfterError={resetViewsAfterError}
        sendErrorMessage={sendErrorMessage}
      />
    )
  }

  return (
    <Panel
      contentClassName={sendSuccess ? styles.sendSuccessContent : null}
      renderHeader={() => (
        <SendPanelHeader
          sendRowDetails={sendRowDetails}
          addRow={addRow}
          showConfirmSend={showConfirmSend}
          sendSuccess={sendSuccess}
          sendError={sendError}
          resetViews={resetViews}
          noSendableAssets={noSendableAssets}
          hasNetworkFees={!!fees}
          maxNumberOfRecipients={maxNumberOfRecipients}
          showSendModal={showSendModal}
          pushQRCodeData={pushQRCodeData}
          disableAddRecipient={
            shouldDisableSendButton(sendRowDetails) || maxRecipientsMet
          }
          disableEnterQRCode={maxRecipientsMet}
          showImportModal={showImportModal}
        />
      )}
      className={styles.sendSuccessPanel}
    >
      {content}
    </Panel>
  )
}

export default SendPanel
