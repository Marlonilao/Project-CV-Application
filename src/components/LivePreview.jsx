import {
  Paper,
  Center,
  Stack,
  Group,
  Text,
  Title,
  Divider,
  Badge,
  Box,
} from '@mantine/core'
import {
  IconMail,
  IconPhone,
  IconBriefcase,
  IconSchool,
  IconTools,
} from '@tabler/icons-react'

const SectionHeading = ({ icon: Icon, label }) => (
  <Group gap={10} mb={10}>
    <Icon size={20} color='var(--mantine-color-blue-6)' />
    <Title order={5} tt='uppercase' c='blue.7' fz={13} fw={700} ls={2}>
      {label}
    </Title>
    <Divider flex={1} color='blue.2' />
  </Group>
)

const LivePreview = ({ CVdata }) => {
  return (
    <Center>
      <Paper
        shadow='md'
        p={48}
        withBorder
        w='210mm'
        mih='297mm'
        style={{ fontFamily: 'Georgia, serif' }}
      >
        {/* Header */}
        {CVdata.fullName && (
          <Box
            mb='xl'
            style={{
              borderLeft: '5px solid var(--mantine-color-blue-6)',
              paddingLeft: 18,
            }}
          >
            <Title order={1} fz={42} fw={800} c='dark.8' lh={1.1}>
              {CVdata.fullName}
            </Title>
            <Group gap='xl' mt={12}>
              <Group gap={7}>
                {CVdata.email && (
                  <>
                    <IconMail size={16} color='gray' />
                    <Text fz={15} c='dimmed'>
                      {CVdata.email}
                    </Text>
                  </>
                )}
              </Group>
              <Group gap={7}>
                {CVdata.phone && (
                  <>
                    <IconPhone size={16} color='gray' />
                    <Text fz={15} c='dimmed'>
                      {CVdata.phone}
                    </Text>
                  </>
                )}
              </Group>
            </Group>
          </Box>
        )}

        <Stack gap='xl'>
          {/* About Me */}
          {CVdata.aboutMe && (
            <Box>
              <SectionHeading icon={IconBriefcase} label='About Me' />
              <Text fz={16} c='dark.6' lh={1.9}>
                {CVdata.aboutMe}
              </Text>
            </Box>
          )}

          {/* Experience */}
          {CVdata.experience?.length > 0 && (
            <Box>
              <SectionHeading icon={IconBriefcase} label='Experience' />
              <Stack gap='lg'>
                {CVdata.experience.map((exp) => (
                  <Box key={exp.id}>
                    <Group justify='space-between' align='flex-start'>
                      <Box>
                        <Text fz={17} fw={700} c='dark.8'>
                          {exp.experienceDetails.jobTitle}
                        </Text>
                        <Text fz={15} c='blue.6' fw={500}>
                          {exp.experienceDetails.company}
                        </Text>
                      </Box>
                      <Badge variant='light' color='blue' size='lg' radius='sm'>
                        {exp.experienceDetails.year}
                      </Badge>
                    </Group>
                    {exp.experienceDetails.description?.length > 0 && (
                      <Stack
                        gap={6}
                        mt={10}
                        pl={16}
                        style={{
                          borderLeft: '3px solid var(--mantine-color-blue-1)',
                        }}
                      >
                        {exp.experienceDetails.description.map((desc) => (
                          <Text key={desc.id} fz={15} c='dark.5' lh={1.7}>
                            • {desc.text}
                          </Text>
                        ))}
                      </Stack>
                    )}
                  </Box>
                ))}
              </Stack>
            </Box>
          )}

          {/* Education */}
          {CVdata.education?.length > 0 && (
            <Box>
              <SectionHeading icon={IconSchool} label='Education' />
              <Stack gap='md'>
                {CVdata.education.map((edu) => (
                  <Group
                    key={edu.id}
                    justify='space-between'
                    align='flex-start'
                  >
                    <Box>
                      <Text fz={17} fw={700} c='dark.8'>
                        {edu.details.school}
                      </Text>
                      <Text fz={15} c='dimmed'>
                        {edu.details.degree}
                      </Text>
                    </Box>
                    <Badge variant='light' color='gray' size='lg' radius='sm'>
                      {edu.details.year}
                    </Badge>
                  </Group>
                ))}
              </Stack>
            </Box>
          )}

          {/* Skills */}
          {CVdata.skills?.length > 0 && (
            <Box>
              <SectionHeading icon={IconTools} label='Skills' />
              <Group gap={10} wrap='wrap'>
                {CVdata.skills.map((skill) => (
                  <Badge
                    key={skill.id}
                    variant='light'
                    color='blue'
                    size='xl'
                    radius='sm'
                    style={{ fontFamily: 'inherit', fontSize: 14 }}
                  >
                    {skill.text}
                  </Badge>
                ))}
              </Group>
            </Box>
          )}
        </Stack>
      </Paper>
    </Center>
  )
}

export default LivePreview
