/* ------------------------- External Dependencies -------------------------- */
import { connect } from 'react-redux'
import { 
  compose,
  lifecycle,
  withProps,
  withState,
  renderComponent
} from 'recompose'
import { 
  reduxForm,
  reset
} from 'redux-form'
/* ------------------------------ Recompose -------------------------------- */
/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(prevProps !== this.props ) {

    }
  }
})


/*---*--- Redux ---*---*/
const mapStateToProps = (state, props) =>  ({

})

const mapDispatchToProps = (dispatch, props) => ({

})

/* -------------------------- Form Configuration ---------------------------- */
/*--- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {

})

const config = {
  form: 'FormComposed',
  fields: [],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/* -------------------------- Render Component ----------------------------- */
const Render = ({ handleSubmit, isSubmitting, styled}) => (
<form>
  <div>
    <Field name="example" placeholder="Example" component={ReduxField} type="text" />
  </div>
  <div>
    <Button type="submit" onClick={handleSubmit}>Submit</Button>
  </div>
</form>
)

/* ---------------------------- Export Default ------------------------------- */

export default compose(
  reduxForm(config),
  connect(mapStateToProps, mapDispatchToProps),
  queryLifecycle,
)(Render);
