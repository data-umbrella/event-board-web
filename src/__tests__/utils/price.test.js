import { formatPrice  } from 'utils/strings';

describe('formatPriceFromEvent', () => {
  it('returns a correctly formatted price for free', () => {
    const event = { price: 'free' }
    
    const result = formatPrice(event.price)
    expect(result).toMatch('Free')
  })

  it('returns a correctly formatted price for paid', () => {
    const event = { price: 'paid' }

    const result = formatPrice(event.price)
    expect(result).toMatch('Paid')
  })

  it('returns a correctly formatted price for field left null', () => {
    const event = { price: null }

    const result = formatPrice(event.price)
    expect(result).toMatch('')
  })

});

