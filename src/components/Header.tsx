import { useState } from 'react'
import { Button, Drawer, Layout } from 'antd'
import { CloseOutlined, MenuOutlined } from '@ant-design/icons'
import { LOGIN_URL, NAV_SECTIONS, REGISTER_URL } from '../data/content'
import { useI18n } from '../i18n/context'
import { scrollToId, scrollToTop } from '../lib/scroll'
import { BrandLogo } from './BrandLogo'

export function Header() {
  const [open, setOpen] = useState(false)
  const { m } = useI18n()

  const goTo = (id: string) => {
    setOpen(false)
    scrollToId(id)
  }

  return (
    <Layout.Header className="atr-header">
      <div className="atr-container atr-header__inner">
        <button
          type="button"
          className="atr-brand"
          onClick={scrollToTop}
          aria-label={m.header.backToTop}
        >
          <BrandLogo />
          <span>Atramentum</span>
        </button>

        <nav className="atr-nav" aria-label={m.header.primaryNav}>
          {NAV_SECTIONS.map((id) => (
            <button
              type="button"
              key={id}
              className="atr-nav__link"
              onClick={() => scrollToId(id)}
            >
              {m.nav[id]}
            </button>
          ))}
          <span className="atr-header__auth">
            <Button className="atr-btn--ghost" href={LOGIN_URL}>
              {m.header.login}
            </Button>
            <Button type="primary" href={REGISTER_URL}>
              {m.header.register}
            </Button>
          </span>
        </nav>

        <Button
          className="atr-menu-btn"
          type="text"
          icon={<MenuOutlined />}
          onClick={() => setOpen(true)}
          aria-label={m.header.openMenu}
        />
      </div>

      <Drawer
        rootClassName="atr-drawer"
        placement="right"
        width={320}
        open={open}
        onClose={() => setOpen(false)}
        closable={false}
      >
        <div className="atr-drawer__head">
          <span className="atr-brand atr-brand--drawer">
            <BrandLogo />
            Atramentum
          </span>
          <Button
            type="text"
            icon={<CloseOutlined />}
            onClick={() => setOpen(false)}
            aria-label={m.header.closeMenu}
          />
        </div>

        <nav className="atr-drawer__nav" aria-label={m.header.mobileNav}>
          {NAV_SECTIONS.map((id) => (
            <button
              type="button"
              key={id}
              className="atr-drawer__link"
              onClick={() => goTo(id)}
            >
              {m.nav[id]}
            </button>
          ))}
        </nav>

        <div className="atr-drawer__auth">
          <Button
            className="atr-btn--ghost"
            size="large"
            block
            href={LOGIN_URL}
            onClick={() => setOpen(false)}
          >
            {m.header.login}
          </Button>
          <Button
            type="primary"
            size="large"
            block
            href={REGISTER_URL}
            onClick={() => setOpen(false)}
          >
            {m.header.register}
          </Button>
        </div>
      </Drawer>
    </Layout.Header>
  )
}