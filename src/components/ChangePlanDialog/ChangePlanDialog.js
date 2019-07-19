import React from 'react'
import Button from '@santiment-network/ui/Button'
import Dialog from '@santiment-network/ui/Dialog'
import { Mutation } from 'react-apollo'
import { NotificationsContext } from '../Notifications/Notifications'
import { UPDATE_SUBSCRIPTION_MUTATION } from '../../gql/plans'
import PLANS from '../Pricing/prices'
import { formatPrice, getBilling } from '../../utils/plans'
import { getDateFormats } from '../../utils/dates'
import sharedStyles from '../Pricing/index.module.scss'
import dialogStyles from '../Dialog.module.scss'

const ChangePlanDialog = ({
  subscription: {
    id,
    currentPeriodEnd,
    plan: { amount, name, interval },
  },
  title,
  price,
  billing,
  planId,
  onDialogClose = () => {},
}) => {
  const [oldPrice] = formatPrice(amount, null, interval)
  const { MMMM, DD, YYYY } = getDateFormats(new Date(currentPeriodEnd))
  const date = `${MMMM} ${DD}, ${YYYY}`

  return (
    <NotificationsContext.Consumer>
      {({ add: addNot }) => (
        <Mutation mutation={UPDATE_SUBSCRIPTION_MUTATION}>
          {(updateSubscription, { loading }) => (
            <Dialog
              trigger={
                <Button
                  fluid
                  className={sharedStyles.link}
                  border
                  accent='blue'
                >
                  Change to this plan
                </Button>
              }
              title='Plan change'
            >
              <Dialog.ScrollContent withPadding>
                Your current plan ({PLANS[name].title} {oldPrice}/month) is
                active until {date}.
                <br />
                Are you sure you want to change to the {title} plan ({price}
                /month) on {date}?
              </Dialog.ScrollContent>
              <Dialog.Actions>
                <Dialog.Cancel className={dialogStyles.cancel}>
                  Cancel
                </Dialog.Cancel>
                <Dialog.Approve
                  accent='blue'
                  isLoading={loading}
                  onClick={() =>
                    updateSubscription({
                      variables: { subscriptionId: +id, planId: +planId },
                    })
                      .then(() =>
                        addNot({
                          variant: 'success',
                          title: `You have successfully upgraded to the "${title}" plan!`,
                          dismissAfter: 5000,
                        }),
                      )
                      .then(onDialogClose)
                      .then(getBilling)
                      .catch(e =>
                        addNot({
                          variant: 'error',
                          title: `Error during the plan change`,
                          description: e.message,
                          dismissAfter: 5000,
                        }),
                      )
                  }
                >
                  Confirm change
                </Dialog.Approve>
              </Dialog.Actions>
            </Dialog>
          )}
        </Mutation>
      )}
    </NotificationsContext.Consumer>
  )
}

export default ChangePlanDialog