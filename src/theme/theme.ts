import type { ThemeConfig } from 'antd'

export const themeConfig: ThemeConfig = {
  token: {
    colorPrimary: '#8e7b96',
    colorPrimaryHover: '#a795b1',
    colorPrimaryActive: '#75637f',
    colorTextLightSolid: '#1e1e1e',
    colorInfo: '#8e7b96',
    colorSuccess: '#7aa382',
    colorWarning: '#c9a86c',
    colorError: '#c46a6a',
    colorBgBase: '#1e1e1e',
    colorBgContainer: '#262626',
    colorBgElevated: '#2a2a2a',
    colorTextBase: '#d9d9d9',
    colorText: '#d9d9d9',
    colorTextSecondary: '#a5a2ab',
    colorTextTertiary: '#83808a',
    colorBorder: 'rgba(217, 217, 217, 0.18)',
    colorBorderSecondary: 'rgba(217, 217, 217, 0.1)',
    colorLink: '#a795b1',
    colorLinkHover: '#bca8c6',
    borderRadius: 10,
    borderRadiusLG: 14,
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    boxShadowSecondary: '0 24px 60px rgba(0, 0, 0, 0.6)',
  },
  components: {
    Button: {
      fontWeight: 500,
      primaryShadow: 'none',
      defaultShadow: 'none',
      dangerShadow: 'none',
      contentFontSizeLG: 16,
    },
    Drawer: {
      colorBgElevated: '#1e1e1e',
    },
  },
}