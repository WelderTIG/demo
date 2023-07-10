import s from "./NavigatiionPanel.module.scss";

export const NavigatiionPanel = ()  => {
  return (
    <div className={ s.panel }>
      <div className={ s.logo }>logo</div>
      <div className={ s.options }>
        <a href="/">home</a>
        <a href="/user">user</a>
        <a href="/market">market</a>
      </div>
    </div>
  )
}