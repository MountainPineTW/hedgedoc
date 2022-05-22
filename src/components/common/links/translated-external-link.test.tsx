/*
 * SPDX-FileCopyrightText: 2022 The HedgeDoc developers (see AUTHORS file)
 *
 * SPDX-License-Identifier: AGPL-3.0-only
 */

import { TranslatedExternalLink } from './translated-external-link'
import { mockI18n } from '../../markdown-renderer/test-utils/mock-i18n'
import { render } from '@testing-library/react'

describe('TranslatedExternalLink', () => {
  const href = 'https://example.com'
  beforeAll(async () => {
    await mockI18n()
  })
  it('renders with i18nKey', () => {
    const view = render(<TranslatedExternalLink i18nKey={'testi18nKey'} href={href} />)
    expect(view.container).toMatchSnapshot()
  })
})
