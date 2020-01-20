// @flow

import ScrollToTop from "./ScrollToTop"
import { withRouter } from "react-router-dom"

const TOP = 0
const LEFT = 0

type Location = {
  +key: string,
  +pathname: string,
  +search: string,
  +hash: string,
  +state: {
    +[string]: boolean
  }
}

export type Props = {
  children?: React$Node,
  location: Location
}

export const componentDidUpdate = function componentDidUpdate(
  prevProps: Props
) {
  const { location }: Props = this.props
  const prev = prevProps.location && prevProps.location.contains("?") ? prevProps.location.substring(0, prevProps.location.indexOf("?")) : prevProps.location;
  const current = location && location.contains("?") ? location.substring(0, location.indexOf("?")) : location;
  if (current !== prev) {
    window.scrollTo(LEFT, TOP)
  }
}

ScrollToTop.prototype.componentDidUpdate = componentDidUpdate

export default withRouter(ScrollToTop)
