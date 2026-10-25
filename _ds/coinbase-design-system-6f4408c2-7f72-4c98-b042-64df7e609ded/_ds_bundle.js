/* @ds-bundle: {"format":3,"namespace":"CoinbaseDesignSystem_6f4408","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SearchInput","sourcePath":"components/core/SearchInput.jsx"},{"name":"PricingTier","sourcePath":"components/marketing/PricingTier.jsx"},{"name":"AssetIcon","sourcePath":"components/trading/AssetIcon.jsx"},{"name":"AssetRow","sourcePath":"components/trading/AssetRow.jsx"},{"name":"PriceCell","sourcePath":"components/trading/PriceCell.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"02d167629a93","components/core/Button.jsx":"8aab8728fad5","components/core/Card.jsx":"82fd6c036d32","components/core/Input.jsx":"4e3554254db7","components/core/SearchInput.jsx":"b30bbd4f6267","components/marketing/PricingTier.jsx":"27ca8ed6a4c2","components/trading/AssetIcon.jsx":"45b71f7969bf","components/trading/AssetRow.jsx":"e72c9e439221","components/trading/PriceCell.jsx":"8e539cd52318","ui_kits/marketing/CtaFooter.jsx":"ddbfa9f96272","ui_kits/marketing/FeatureGrid.jsx":"f0f79d39376a","ui_kits/marketing/Hero.jsx":"49ba26848491","ui_kits/marketing/MarketsSection.jsx":"4c876c1b3ef7","ui_kits/marketing/TopNav.jsx":"c9a59bfa8486"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CoinbaseDesignSystem_6f4408 = window.CoinbaseDesignSystem_6f4408 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small uppercase pill section label, e.g. "INSTITUTIONAL", "REGULATED".
 * Background surface-strong, caption-strong type, pill geometry.
 */
function Badge({
  children,
  tone = 'neutral',
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      background: 'var(--color-surface-strong)',
      color: 'var(--color-ink)'
    },
    'on-dark': {
      background: 'var(--color-surface-dark-elevated)',
      color: 'var(--color-on-dark)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--type-caption-strong-size)',
      fontWeight: 'var(--type-caption-strong-weight)',
      lineHeight: 'var(--type-caption-strong-lh)',
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      padding: '6px 12px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Coinbase primary/secondary/outline/text button.
 * Every variant is a pill (radius-pill, 100px). Coinbase Blue is the only
 * filled action color — never use trading green/red as a fill.
 */
function Button({
  variant = 'primary',
  // primary | secondary-light | secondary-dark | outline-on-dark | text
  size = 'md',
  // md (44px) | lg (56px, hero "Get started")
  disabled = false,
  children,
  style = {},
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-sans)',
    fontSize: 'var(--type-button-size)',
    fontWeight: 'var(--type-button-weight)',
    lineHeight: 'var(--type-button-lh)',
    border: 'none',
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background 120ms ease, opacity 120ms ease',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    boxSizing: 'border-box'
  };
  const sizes = {
    md: {
      height: '44px',
      padding: '0 20px'
    },
    lg: {
      height: '56px',
      padding: '0 32px'
    }
  };
  const variants = {
    primary: {
      background: disabled ? 'var(--color-primary-disabled)' : 'var(--color-primary)',
      color: 'var(--color-on-primary)'
    },
    'secondary-light': {
      background: 'var(--color-surface-strong)',
      color: 'var(--color-ink)'
    },
    'secondary-dark': {
      background: 'var(--color-surface-dark-elevated)',
      color: 'var(--color-on-dark)'
    },
    'outline-on-dark': {
      background: 'transparent',
      color: 'var(--color-on-dark)',
      border: '1px solid var(--color-on-dark)'
    },
    text: {
      background: 'transparent',
      color: 'var(--color-primary)',
      padding: '0',
      height: 'auto'
    }
  };
  const composed = {
    ...base,
    ...(variant === 'text' ? {} : sizes[size]),
    ...variants[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: composed,
    disabled: disabled,
    onMouseDown: e => {
      if (!disabled && variant === 'primary') e.currentTarget.style.background = 'var(--color-primary-active)';
    },
    onMouseUp: e => {
      if (!disabled && variant === 'primary') e.currentTarget.style.background = 'var(--color-primary)';
    },
    onMouseLeave: e => {
      if (!disabled && variant === 'primary') e.currentTarget.style.background = 'var(--color-primary)';
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Editorial container card. radius-xl (24px), 32px padding.
 * `feature`/`light` sit on white with a hairline; `dark` is the floating
 * product-UI mockup on dark heroes (elevated surface, no border).
 */
function Card({
  variant = 'feature',
  // feature | light | dark
  hover = false,
  children,
  style = {},
  ...rest
}) {
  const variants = {
    feature: {
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)',
      border: '1px solid var(--color-hairline)'
    },
    light: {
      background: 'var(--color-canvas)',
      color: 'var(--color-ink)',
      border: '1px solid var(--color-hairline)'
    },
    dark: {
      background: 'var(--color-surface-dark-elevated)',
      color: 'var(--color-on-dark)',
      border: 'none'
    }
  };
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => hover && setH(true),
    onMouseLeave: () => hover && setH(false),
    style: {
      boxSizing: 'border-box',
      fontFamily: 'var(--font-sans)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-xl)',
      transition: 'box-shadow 160ms ease',
      boxShadow: h ? 'var(--shadow-soft)' : 'var(--shadow-none)',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Standard text input. radius-md (12px), 48px tall, 1px hairline.
 * On focus the border thickens to 2px Coinbase Blue.
 */
function Input({
  style = {},
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      boxSizing: 'border-box',
      width: '100%',
      height: '48px',
      padding: '14px 16px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--type-body-md-size)',
      color: 'var(--color-ink)',
      background: 'var(--color-canvas)',
      borderRadius: 'var(--radius-md)',
      border: focused ? '2px solid var(--color-primary)' : '1px solid var(--color-hairline)',
      outline: 'none',
      transition: 'border-color 120ms ease',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SearchInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pill-shaped search bar. Background surface-strong, radius-pill, 44px tall.
 */
function SearchInput({
  placeholder = 'Search',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      height: '44px',
      padding: '0 20px',
      background: 'var(--color-surface-strong)',
      borderRadius: 'var(--radius-pill)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    style: {
      flex: 'none',
      color: 'var(--color-muted)'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7",
    stroke: "currentColor",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 20-3.5-3.5",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("input", _extends({
    placeholder: placeholder,
    style: {
      flex: 1,
      border: 'none',
      background: 'transparent',
      outline: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--type-body-md-size)',
      color: 'var(--color-ink)'
    }
  }, rest)));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PricingTier.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pricing tier card. radius-xl, 32px padding, hairline border.
 * `featured` inverts to the dark surface (signals highlighted choice — no ribbons).
 */
function PricingTier({
  name,
  price,
  period = '/mo',
  description,
  features = [],
  ctaLabel = 'Get started',
  featured = false,
  style = {},
  ...rest
}) {
  const dark = featured;
  const tick = dark ? 'var(--color-on-dark)' : 'var(--color-primary)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: 'var(--space-xl)',
      borderRadius: 'var(--radius-xl)',
      fontFamily: 'var(--font-sans)',
      background: dark ? 'var(--color-surface-dark)' : 'var(--color-canvas)',
      color: dark ? 'var(--color-on-dark)' : 'var(--color-ink)',
      border: dark ? 'none' : '1px solid var(--color-hairline)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-title-md-size)',
      fontWeight: 600
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--type-display-sm-size)',
      fontWeight: 400,
      letterSpacing: 'var(--type-display-sm-ls)'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-body-sm-size)',
      color: dark ? 'var(--color-on-dark-soft)' : 'var(--color-muted)'
    }
  }, period)), description && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-body-sm-size)',
      color: dark ? 'var(--color-on-dark-soft)' : 'var(--color-body)'
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      flex: 1
    }
  }, features.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '10px',
      fontSize: 'var(--type-body-md-size)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": "true",
    style: {
      flex: 'none',
      marginTop: '3px',
      color: tick
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12.5 10 17 19 7",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? 'var(--color-on-dark)' : 'var(--color-body)'
    }
  }, f)))), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: dark ? 'primary' : 'secondary-light',
    style: {
      width: '100%'
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { PricingTier });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PricingTier.jsx", error: String((e && e.message) || e) }); }

// components/trading/AssetIcon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular plate behind an asset glyph. radius-full, 32px default.
 * Pass a `symbol` (1–2 chars) or `src` image. `color` fills the glyph;
 * accent-yellow is the illustrative-only BTC fill.
 */
function AssetIcon({
  symbol,
  src,
  color = 'var(--color-primary)',
  size = 32,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 'none',
      width: `${size}px`,
      height: `${size}px`,
      borderRadius: 'var(--radius-full)',
      background: src ? 'transparent' : color,
      color: 'var(--color-on-primary)',
      overflow: 'hidden',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: `${Math.round(size * 0.42)}px`,
      lineHeight: 1,
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : symbol);
}
Object.assign(__ds_scope, { AssetIcon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trading/AssetIcon.jsx", error: String((e && e.message) || e) }); }

// components/trading/PriceCell.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Inline price-change cell. Color only — green up / red down, no fill.
 * Renders in mono number type.
 */
function PriceCell({
  direction = 'up',
  children,
  style = {},
  ...rest
}) {
  const color = direction === 'down' ? 'var(--color-down)' : 'var(--color-up)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-number-size)',
      fontWeight: 'var(--type-number-weight)',
      lineHeight: 'var(--type-number-lh)',
      color,
      fontVariantNumeric: 'tabular-nums',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { PriceCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trading/PriceCell.jsx", error: String((e && e.message) || e) }); }

// components/trading/AssetRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Horizontal asset-list row. 32px circular icon, name + ticker, mono price,
 * 24h change cell. 1px hairline divider beneath, transparent background.
 */
function AssetRow({
  name,
  ticker,
  price,
  change,
  direction = 'up',
  symbol,
  iconSrc,
  iconColor,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '16px 8px',
      borderBottom: '1px solid var(--color-hairline)',
      fontFamily: 'var(--font-sans)',
      background: 'transparent',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.AssetIcon, {
    symbol: symbol,
    src: iconSrc,
    color: iconColor
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-title-md-size)',
      fontWeight: 'var(--type-title-md-weight)',
      color: 'var(--color-ink)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-body-sm-size)',
      color: 'var(--color-muted)'
    }
  }, ticker)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-number-size)',
      fontWeight: 'var(--type-number-weight)',
      color: 'var(--color-ink)',
      fontVariantNumeric: 'tabular-nums',
      textAlign: 'right'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '96px',
      textAlign: 'right'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.PriceCell, {
    direction: direction
  }, change)));
}
Object.assign(__ds_scope, { AssetRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/trading/AssetRow.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CtaFooter.jsx
try { (() => {
/* global React */
const {
  Button
} = window.CoinbaseDesignSystem_6f4408;
function CtaFooter() {
  const cols = [{
    h: 'Company',
    items: ['About', 'Careers', 'Affiliates', 'Newsroom', 'Investors']
  }, {
    h: 'Individuals',
    items: ['Buy & sell', 'Earn rewards', 'Wallet', 'Card', 'Explore assets']
  }, {
    h: 'Businesses',
    items: ['Prime', 'Commerce', 'Custody', 'Asset Hub']
  }, {
    h: 'Developers',
    items: ['Cloud', 'Wallet SDK', 'Base', 'Pay', 'Docs']
  }, {
    h: 'Resources',
    items: ['Help center', 'Blog', 'Legal & privacy', 'Status']
  }, {
    h: 'Connect',
    items: ['Twitter', 'Instagram', 'LinkedIn', 'YouTube']
  }];
  return /*#__PURE__*/React.createElement("footer", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-surface-dark)',
      color: 'var(--color-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '96px 24px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--type-display-md-size)',
      lineHeight: 1.09,
      letterSpacing: 'var(--type-display-md-ls)',
      margin: '0 0 28px',
      maxWidth: '640px'
    }
  }, "Take control of your money today"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Get started"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-on-dark",
    size: "lg"
  }, "Contact sales")))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas)',
      borderTop: '1px solid var(--color-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 24px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(6, 1fr)',
      gap: '24px'
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontSize: 'var(--type-title-sm-size)',
      fontWeight: 600,
      color: 'var(--color-ink)',
      margin: '0 0 16px'
    }
  }, c.h), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("li", {
    key: i
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--type-body-sm-size)',
      color: 'var(--color-body)',
      textDecoration: 'none'
    }
  }, i))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '48px',
      paddingTop: '24px',
      borderTop: '1px solid var(--color-hairline)',
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-caption-size)',
      color: 'var(--color-muted)'
    }
  }, "\xA9 2026 Coinbase. All rights reserved."), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--type-caption-size)',
      color: 'var(--color-muted)'
    }
  }, "Privacy \xB7 Cookie preferences \xB7 Licenses")))));
}
window.CtaFooter = CtaFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CtaFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/FeatureGrid.jsx
try { (() => {
/* global React */
const {
  Card
} = window.CoinbaseDesignSystem_6f4408;
function FeatureGrid() {
  const features = [{
    t: 'Manage your portfolio',
    d: 'Buy and sell popular digital currencies, keep track of them in one place.'
  }, {
    t: 'Recurring buys',
    d: 'Invest in crypto slowly by buying a fixed amount on a regular schedule.'
  }, {
    t: 'Vault protection',
    d: 'For added security, store your funds in a vault with time-delayed withdrawals.'
  }, {
    t: 'Mobile apps',
    d: 'Stay on top of the markets with the Coinbase app for Android or iOS.'
  }, {
    t: 'Earn rewards',
    d: 'Earn up to 5.2% APY rewards for select assets in your account.'
  }, {
    t: 'Coinbase Card',
    d: 'Spend crypto and earn rewards everywhere Visa is accepted.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-surface-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '96px 24px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--type-display-lg-size)',
      lineHeight: 1,
      letterSpacing: 'var(--type-display-lg-ls)',
      margin: '0 0 48px',
      color: 'var(--color-ink)',
      maxWidth: '560px'
    }
  }, "Everything you need to get started"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '24px'
    }
  }, features.map(f => /*#__PURE__*/React.createElement(Card, {
    key: f.t,
    variant: "feature",
    hover: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '40px',
      height: '40px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--color-surface-strong)',
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '14px',
      height: '14px',
      borderRadius: '4px',
      background: 'var(--color-primary)'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--type-title-md-size)',
      fontWeight: 600,
      margin: '0 0 8px',
      color: 'var(--color-ink)'
    }
  }, f.t), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--type-body-md-size)',
      lineHeight: 1.5,
      color: 'var(--color-body)',
      margin: 0
    }
  }, f.d))))));
}
window.FeatureGrid = FeatureGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/FeatureGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
/* global React */
const {
  Button,
  Badge,
  Card,
  PriceCell
} = window.CoinbaseDesignSystem_6f4408;
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-surface-dark)',
      color: 'var(--color-on-dark)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '96px 24px',
      display: 'grid',
      gridTemplateColumns: '1.1fr 0.9fr',
      gap: '48px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "on-dark"
  }, "Trusted by 110M+"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--type-display-mega-size)',
      lineHeight: 1,
      letterSpacing: 'var(--type-display-mega-ls)',
      margin: '24px 0 20px'
    }
  }, "The future of money is here"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--color-on-dark-soft)',
      fontSize: '18px',
      lineHeight: 1.5,
      maxWidth: '460px',
      margin: '0 0 32px'
    }
  }, "Buy, sell and manage hundreds of cryptocurrencies on the most trusted crypto platform."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg"
  }, "Get started"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline-on-dark",
    size: "lg"
  }, "Explore assets"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '420px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "dark",
    style: {
      position: 'absolute',
      width: '320px',
      right: '20px',
      top: '40px',
      transform: 'rotate(3deg)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      color: 'var(--color-on-dark-soft)'
    }
  }, "Portfolio balance"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '36px',
      fontWeight: 500,
      margin: '8px 0 4px'
    }
  }, "$128,940.55"), /*#__PURE__*/React.createElement(PriceCell, {
    direction: "up"
  }, "+$2,104.20 (1.65%) today"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: '20px',
      height: '90px',
      borderRadius: '12px',
      background: 'linear-gradient(180deg, rgba(5,177,105,.22), transparent)',
      borderBottom: '2px solid var(--color-up)'
    }
  })), /*#__PURE__*/React.createElement(Card, {
    variant: "dark",
    style: {
      position: 'absolute',
      width: '220px',
      right: '170px',
      top: '230px',
      transform: 'rotate(-5deg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '32px',
      height: '32px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--color-accent-yellow)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#1b1300',
      fontWeight: 700
    }
  }, "\u20BF"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '15px',
      fontWeight: 600
    }
  }, "Bitcoin"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      color: 'var(--color-on-dark-soft)'
    }
  }, "BTC"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '24px',
      fontWeight: 500,
      marginTop: '14px'
    }
  }, "$64,210"), /*#__PURE__*/React.createElement(PriceCell, {
    direction: "up"
  }, "+2.41%")))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MarketsSection.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React */
const {
  AssetRow,
  Button
} = window.CoinbaseDesignSystem_6f4408;
function MarketsSection() {
  const assets = [{
    name: 'Bitcoin',
    ticker: 'BTC',
    symbol: '₿',
    iconColor: 'var(--color-accent-yellow)',
    price: '$64,210.00',
    change: '+2.41%',
    direction: 'up'
  }, {
    name: 'Ethereum',
    ticker: 'ETH',
    symbol: 'E',
    price: '$3,180.55',
    change: '−0.87%',
    direction: 'down'
  }, {
    name: 'Solana',
    ticker: 'SOL',
    symbol: 'S',
    price: '$148.20',
    change: '+5.13%',
    direction: 'up'
  }, {
    name: 'Cardano',
    ticker: 'ADA',
    symbol: 'A',
    price: '$0.4521',
    change: '+1.02%',
    direction: 'up'
  }, {
    name: 'USD Coin',
    ticker: 'USDC',
    symbol: '$',
    price: '$1.00',
    change: '+0.01%',
    direction: 'up'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--color-canvas)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '96px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: '32px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--type-display-lg-size)',
      lineHeight: 1,
      letterSpacing: 'var(--type-display-lg-ls)',
      margin: 0,
      color: 'var(--color-ink)'
    }
  }, "Markets"), /*#__PURE__*/React.createElement(Button, {
    variant: "text"
  }, "See all assets \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '720px'
    }
  }, assets.map(a => /*#__PURE__*/React.createElement(AssetRow, _extends({
    key: a.ticker
  }, a))))));
}
window.MarketsSection = MarketsSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MarketsSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/TopNav.jsx
try { (() => {
/* global React */
const {
  Button,
  SearchInput
} = window.CoinbaseDesignSystem_6f4408;
function TopNav({
  onDark = false
}) {
  const links = ['Cryptocurrencies', 'Individuals', 'Businesses', 'Institutions', 'Developers', 'Company'];
  const fg = onDark ? 'var(--color-on-dark)' : 'var(--color-ink)';
  const bg = onDark ? 'var(--color-surface-dark)' : 'var(--color-canvas)';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      background: bg,
      borderBottom: onDark ? 'none' : '1px solid var(--color-hairline)',
      position: 'sticky',
      top: 0,
      zIndex: 50
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      height: '64px',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      gap: '28px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '28px',
      height: '28px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--color-primary)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '10px',
      height: '10px',
      borderRadius: '2px',
      background: '#fff'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '20px',
      fontWeight: 600,
      letterSpacing: '-0.4px',
      color: fg
    }
  }, "Coinbase")), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: 'flex',
      gap: '20px',
      listStyle: 'none',
      margin: 0,
      padding: 0,
      flex: 1
    }
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--type-nav-link-size)',
      fontWeight: 500,
      color: fg,
      textDecoration: 'none',
      opacity: 0.92
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '200px'
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "Search"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 'var(--type-nav-link-size)',
      fontWeight: 500,
      color: fg,
      textDecoration: 'none'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Sign up"))));
}
window.TopNav = TopNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/TopNav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.PricingTier = __ds_scope.PricingTier;

__ds_ns.AssetIcon = __ds_scope.AssetIcon;

__ds_ns.AssetRow = __ds_scope.AssetRow;

__ds_ns.PriceCell = __ds_scope.PriceCell;

})();
