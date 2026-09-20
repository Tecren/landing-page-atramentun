import { Layout } from 'antd'
import { InstagramOutlined } from '@ant-design/icons'
import logo from '../assets/icons/LOGO.svg'
import { INSTAGRAM_URL, NAV_SECTIONS } from '../data/content'
import { useI18n } from '../i18n/context'
import { scrollToId } from '../lib/scroll'

export function Footer() {
  const { m } = useI18n()

  return (
    <Layout.Footer className="atr-footer">
      <div className="atr-container atr-footer__inner">
        <div className="atr-footer__brand">
          <span className="atr-brand atr-brand--footer">
            <img src={logo} alt="" width={28} height={35} />
            Atramentum
          </span>
          <p className="atr-footer__desc">{m.footer.desc}</p>
        </div>

        <nav className="atr-footer__nav" aria-label={m.footer.navLabel}>
          {NAV_SECTIONS.map((id) => (
            <button
              type="button"
              key={id}
              className="atr-footer__link"
              onClick={() => scrollToId(id)}
            >
              {m.nav[id]}
            </button>
          ))}
        </nav>

        <a
          className="atr-footer__social"
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={m.footer.instagram}
        >
          <InstagramOutlined />
        </a>
      </div>

      <div className="atr-footer__bottom">
        <div className="atr-container">
          <span>{m.footer.copyright}</span>
        </div>
      </div>
    </Layout.Footer>
  )
}