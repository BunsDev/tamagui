import { FastForward, Pause, Rewind } from '@tamagui/lucide-icons'
import React, { memo } from 'react'
import {
  Button,
  Card,
  CardProps,
  Image,
  Paragraph,
  Separator,
  Square,
  Theme,
  ThemeName,
  XStack,
  YStack,
} from 'tamagui'

import image from '../public/mj.jpg'

export const MediaPlayer = memo(
  ({
    theme,
    alt,
    onHoverSection,
    pointerEvents,
    pointerEventsControls,
    ...cardProps
  }: CardProps & {
    alt?: number | null
    onHoverSection?: (name: string) => void
    pointerEventsControls?: any
  }) => {
    const tint = !alt ? null : (`alt${alt}` as ThemeName)
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'stretch',
          contain: 'strict',
          minWidth: 330,
          minHeight: 200,
        }}
      >
        <Theme name={tint}>
          <Card
            overflow="visible"
            bordered
            br="$7"
            pointerEvents={pointerEvents}
            p={0}
            ai="stretch"
            mb={40}
            {...cardProps}
          >
            <XStack ai="center" p="$4" space="$5">
              <Square pos="relative" ov="hidden" br="$6" size="$8">
                <Image width={90} height={90} src={image.src} />
              </Square>

              <YStack als="center" y={-3} miw={165} jc="center">
                <Paragraph fontWeight="700">Billie Jean</Paragraph>
                <Paragraph color="$colorHover" size="$3">
                  Michael Jackson
                </Paragraph>
                <Paragraph color="$colorHover" size="$3">
                  Thriller
                </Paragraph>
              </YStack>
            </XStack>

            <Separator mb={-1} />

            <XStack
              zi={1000}
              w="100%"
              px="$6"
              py="$4"
              bc="$backgroundHover"
              bbrr={17}
              bblr={17}
              ai="center"
              space="$5"
              jc="center"
              pointerEvents={pointerEvents}
            >
              <Rewind size={20} />
              <Button
                bordered
                hoverStyle={{
                  elevation: '$6',
                  scale: 1.025,
                }}
                my="$-7"
                icon={Pause}
                size="$8"
                circular
                elevation="$2"
                pointerEvents={pointerEventsControls}
              />
              <FastForward size={20} />
            </XStack>
          </Card>
        </Theme>
      </div>
    )
  }
)
