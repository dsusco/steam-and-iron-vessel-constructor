import { describe, it, expect } from 'vitest'

import * as GAMUTS from '@/constants/gamuts'

describe('gamuts constant', () => {
  it('accuracy gamut is 6+–2+', () => {
    expect(GAMUTS.ACCURACY_GAMUT).toStrictEqual(['6+', '5+', '4+', '3+', '2+'])
  })

  it('armor rating gamut is -–2+', () => {
    expect(GAMUTS.ARMOR_RATING_GAMUT).toStrictEqual(['-', '6+', '5+', '4+', '3+', '2+'])
  })

  it('damage gamut is 1–6', () => {
    expect(GAMUTS.DAMAGE_GAMUT).toStrictEqual(['1', '2', '3', '4', '5', '6'])
  })

  it('engine rating gamut is 0–12', () => {
    expect(GAMUTS.ENGINE_RATING_GAMUT).toStrictEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'])
  })

  it('firing arc gamut is 0–6', () => {
    expect(GAMUTS.FIRING_ARC_GAMUT).toStrictEqual(['0', '1', '2', '3', '4', '5', '6'])
  })

  it('hull rating gamut is 1–18', () => {
    expect(GAMUTS.HULL_RATING_GAMUT).toStrictEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'])
  })

  it('penetration gamut is -–+5', () => {
    expect(GAMUTS.PENETRATION_GAMUT).toStrictEqual(['-', '+1', '+2', '+3', '+4', '+5'])
  })

  it('range gamut is 1–18', () => {
    expect(GAMUTS.RANGE_GAMUT).toStrictEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'])
  })

  it('rate of fire gamut is 1–6', () => {
    expect(GAMUTS.RATE_OF_FIRE_GAMUT).toStrictEqual(['1', '2', '3', '4', '5', '6'])
  })

  it('size checkboxes gamut is 1–6', () => {
    expect(GAMUTS.SIZE_CHECKBOXES_GAMUT).toStrictEqual(['1', '2', '3', '4', '5', '6'])
  })
})
