import { useState } from 'react'
import Link from 'next/link'

import styles from './header.module.css'
import useTheme from '@/lib/theme'
import Moon from '@/components/icons/moon'
import Sun from '@/components/icons/sun'
import useMounted from '@/lib/use-mounted'
import Tabs from '@/components/tabs/index'

const Header = ({ slug, title, showTab }) => {
  const isMounted = useMounted()
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <span>
          <Link href="/">
            <a
              aria-label="Navigate Home"
              className={slug ? styles.home : styles.slug}
            >
              MKBlog
            </a>
          </Link>
          <span className={styles.tagline}>
            {slug && (
              <b>
                &nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;
                {'  '}
                <span style={{ color: 'var(--accent)' }}>{title}</span>
              </b>
            )}
          </span>
        </span>
        <button
          className={styles.command}
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {isMounted &&
            (theme === 'light' ? (
              <Moon color="var(--fg)" size={30} key="icon-light" />
            ) : (
              <Sun color="var(--fg)" size={30} key="icon-dark" />
            ))}
        </button>
      </div>
      {showTab && (
        <Tabs
          tabs={[
            { title: 'Blog', value: '' },
            { title: 'Vim', value: 'vim' },
            { title: 'Journal', value: 'journal' },
            { title: 'Profile', value: 'profile' },
          ]}
        />
      )}
    </nav>
  )
}

export default Header
