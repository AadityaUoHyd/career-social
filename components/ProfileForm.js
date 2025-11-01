import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Avatar, TextField, Button, Box, Typography, IconButton, Divider, Chip, Grid, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LinkIcon from '@mui/icons-material/Link';
// Using native date input instead of MUI Date Picker

const ProfileForm = () => {
  const { data: session } = useSession();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: '',
    headline: '',
    about: '',
    location: '',
    website: '',
    github: '',
    phone: '',
    skills: [],
    experience: [],
    education: []
  });

  const [newSkill, setNewSkill] = useState('');
  const [currentExperience, setCurrentExperience] = useState({
    title: '',
    company: '',
    location: '',
    current: true,
    startDate: null,
    endDate: null,
    description: ''
  });
  const [currentEducation, setCurrentEducation] = useState({
    school: '',
    degree: '',
    field: '',
    startDate: null,
    endDate: null,
    description: ''
  });

  useEffect(() => {
    // Load profile data from API or session
    if (session?.user) {
      setProfile(prev => ({
        ...prev,
        name: session.user.name || '',
        email: session.user.email || '',
        image: session.user.image || ''
      }));
    }
  }, [session]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleExperienceChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentExperience(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setCurrentEducation(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addSkill = () => {
    if (newSkill.trim() && !profile.skills.includes(newSkill.trim())) {
      setProfile(prev => ({
        ...prev,
        skills: [...prev.skills, newSkill.trim()]
      }));
      setNewSkill('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills.filter(skill => skill !== skillToRemove)
    }));
  };

  const addExperience = () => {
    if (currentExperience.title && currentExperience.company) {
      setProfile(prev => ({
        ...prev,
        experience: [...prev.experience, currentExperience]
      }));
      setCurrentExperience({
        title: '',
        company: '',
        location: '',
        current: true,
        startDate: null,
        endDate: null,
        description: ''
      });
    }
  };

  const removeExperience = (index) => {
    setProfile(prev => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index)
    }));
  };

  const addEducation = () => {
    if (currentEducation.school && currentEducation.degree) {
      setProfile(prev => ({
        ...prev,
        education: [...prev.education, currentEducation]
      }));
      setCurrentEducation({
        school: '',
        degree: '',
        field: '',
        startDate: null,
        endDate: null,
        description: ''
      });
    }
  };

  const removeEducation = (index) => {
    setProfile(prev => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TODO: Implement API call to save profile
    console.log('Profile saved:', profile);
    setIsEditing(false);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} className="space-y-6">
        {/* Basic Info Section */}
        <Paper elevation={3} className="p-6">
          <div className="flex justify-between items-center mb-6">
            <Typography variant="h5">Basic Information</Typography>
            {!isEditing ? (
              <Button 
                startIcon={<EditIcon />} 
                onClick={() => setIsEditing(true)}
                variant="outlined"
              >
                Edit Profile
              </Button>
            ) : (
              <div className="space-x-2">
                <Button 
                  type="submit" 
                  startIcon={<SaveIcon />} 
                  variant="contained"
                  color="primary"
                >
                  Save
                </Button>
                <Button 
                  onClick={() => setIsEditing(false)}
                  variant="outlined"
                  color="secondary"
                >
                  Cancel
                </Button>
              </div>
            )}
          </div>

          <Grid container spacing={3}>
            <Grid item xs={12} md={3} className="flex justify-center">
              <div className="relative">
                <Avatar 
                  src={profile.image}
                  sx={{ width: 150, height: 150 }}
                  className="border-2 border-gray-300"
                >
                  {!profile.image && <PersonIcon sx={{ fontSize: 60 }} />}
                </Avatar>
                {isEditing && (
                  <Button 
                    variant="contained" 
                    size="small" 
                    component="label"
                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
                  >
                    Change
                    <input 
                      type="file" 
                      hidden 
                      accept="image/*"
                      onChange={(e) => {
                        // Handle image upload
                        const file = e.target.files[0];
                        if (file) {
                          // TODO: Upload image and get URL
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setProfile(prev => ({
                              ...prev,
                              image: reader.result
                            }));
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </Button>
                )}
              </div>
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Full Name"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    fullWidth
                    disabled={!isEditing}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Email"
                    name="email"
                    value={session?.user?.email || ''}
                    fullWidth
                    disabled
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Headline (e.g., Software Developer at Company)"
                    name="headline"
                    value={profile.headline}
                    onChange={handleInputChange}
                    fullWidth
                    disabled={!isEditing}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Location"
                    name="location"
                    value={profile.location}
                    onChange={handleInputChange}
                    fullWidth
                    disabled={!isEditing}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Phone"
                    name="phone"
                    value={profile.phone}
                    onChange={handleInputChange}
                    fullWidth
                    disabled={!isEditing}
                    margin="normal"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>

        {/* About Section */}
        <Paper elevation={3} className="p-6">
          <Typography variant="h6" className="mb-4">About</Typography>
          <TextField
            label="Tell us about yourself"
            name="about"
            value={profile.about}
            onChange={handleInputChange}
            fullWidth
            multiline
            rows={4}
            disabled={!isEditing}
            variant={isEditing ? 'outlined' : 'standard'}
            InputProps={{
              ...(isEditing ? {} : { disableUnderline: true }),
            }}
          />
        </Paper>

        {/* Skills Section */}
        <Paper elevation={3} className="p-6">
          <div className="flex justify-between items-center mb-4">
            <Typography variant="h6">Skills</Typography>
            {isEditing && (
              <div className="flex items-center space-x-2">
                <TextField
                  size="small"
                  placeholder="Add a skill"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                />
                <Button 
                  variant="contained" 
                  size="small" 
                  onClick={addSkill}
                  startIcon={<AddIcon />}
                >
                  Add
                </Button>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill, index) => (
              <Chip
                key={index}
                label={skill}
                onDelete={isEditing ? () => removeSkill(skill) : undefined}
                color="primary"
                variant="outlined"
              />
            ))}
            {profile.skills.length === 0 && !isEditing && (
              <Typography color="textSecondary">No skills added yet</Typography>
            )}
          </div>
        </Paper>

        {/* Experience Section */}
        <Paper elevation={3} className="p-6">
          <div className="flex justify-between items-center mb-4">
            <Typography variant="h6">Experience</Typography>
            {isEditing && (
              <Button 
                variant="outlined" 
                startIcon={<AddIcon />}
                onClick={() => {
                  // Open experience form
                }}
              >
                Add Experience
              </Button>
            )}
          </div>
          
          {isEditing && (
            <div className="mb-6 p-4 border rounded-lg">
              <Typography variant="subtitle2" className="mb-4">Add New Experience</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Job Title"
                    name="title"
                    value={currentExperience.title}
                    onChange={handleExperienceChange}
                    fullWidth
                    size="small"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Company"
                    name="company"
                    value={currentExperience.company}
                    onChange={handleExperienceChange}
                    fullWidth
                    size="small"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Location"
                    name="location"
                    value={currentExperience.location}
                    onChange={handleExperienceChange}
                    fullWidth
                    size="small"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Start Date"
                    type="date"
                    value={currentExperience.startDate || ''}
                    onChange={(e) => 
                      setCurrentExperience(prev => ({ ...prev, startDate: e.target.value }))
                    }
                    fullWidth
                    size="small"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="End Date"
                    type="date"
                    value={currentExperience.endDate || ''}
                    onChange={(e) => 
                      setCurrentExperience(prev => ({ ...prev, endDate: e.target.value }))
                    }
                    disabled={currentExperience.current}
                    fullWidth
                    size="small"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                  <div className="flex items-center mt-2">
                    <input
                      type="checkbox"
                      id="currentJob"
                      name="current"
                      checked={currentExperience.current}
                      onChange={handleExperienceChange}
                      className="mr-2"
                    />
                    <label htmlFor="currentJob">I currently work here</label>
                  </div>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    name="description"
                    value={currentExperience.description}
                    onChange={handleExperienceChange}
                    fullWidth
                    multiline
                    rows={3}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} className="flex justify-end">
                  <Button 
                    variant="contained" 
                    color="primary"
                    onClick={addExperience}
                    disabled={!currentExperience.title || !currentExperience.company}
                  >
                    Add Experience
                  </Button>
                </Grid>
              </Grid>
            </div>
          )}

          {profile.experience.length > 0 ? (
            <div className="space-y-4">
              {profile.experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-blue-500 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <Typography variant="subtitle1" className="font-medium">
                        {exp.title}
                      </Typography>
                      <Typography variant="body2" color="primary">
                        {exp.company}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {exp.startDate ? new Date(exp.startDate).toLocaleDateString() : ''} -{' '}
                        {exp.current ? 'Present' : (exp.endDate ? new Date(exp.endDate).toLocaleDateString() : '')}
                      </Typography>
                      {exp.location && (
                        <Typography variant="body2" color="textSecondary">
                          {exp.location}
                        </Typography>
                      )}
                    </div>
                    {isEditing && (
                      <IconButton 
                        size="small" 
                        onClick={() => removeExperience(index)}
                        color="error"
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    )}
                  </div>
                  {exp.description && (
                    <Typography variant="body2" className="mt-2">
                      {exp.description}
                    </Typography>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <Typography color="textSecondary" className="text-center py-4">
              No experience added yet
            </Typography>
          )}
        </Paper>

        {/* Education Section */}
        <Paper elevation={3} className="p-6">
          <div className="flex justify-between items-center mb-4">
            <Typography variant="h6">Education</Typography>
            {isEditing && (
              <Button 
                variant="outlined" 
                startIcon={<AddIcon />}
                onClick={() => {
                  // Open education form
                }}
              >
                Add Education
              </Button>
            )}
          </div>
          
          {isEditing && (
            <div className="mb-6 p-4 border rounded-lg">
              <Typography variant="subtitle2" className="mb-4">Add New Education</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="School/University"
                    name="school"
                    value={currentEducation.school}
                    onChange={handleEducationChange}
                    fullWidth
                    size="small"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Degree"
                    name="degree"
                    value={currentEducation.degree}
                    onChange={handleEducationChange}
                    fullWidth
                    size="small"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField
                    label="Field of Study"
                    name="field"
                    value={currentEducation.field}
                    onChange={handleEducationChange}
                    fullWidth
                    size="small"
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="Start Date"
                    type="date"
                    value={currentEducation.startDate || ''}
                    onChange={(e) => 
                      setCurrentEducation(prev => ({ ...prev, startDate: e.target.value }))
                    }
                    fullWidth
                    size="small"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <TextField
                    label="End Date (or expected)"
                    type="date"
                    value={currentEducation.endDate || ''}
                    onChange={(e) => 
                      setCurrentEducation(prev => ({ ...prev, endDate: e.target.value }))
                    }
                    fullWidth
                    size="small"
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Description"
                    name="description"
                    value={currentEducation.description}
                    onChange={handleEducationChange}
                    fullWidth
                    multiline
                    rows={2}
                    margin="normal"
                    placeholder="Activities, achievements, or other information"
                  />
                </Grid>
                <Grid item xs={12} className="flex justify-end">
                  <Button 
                    variant="contained" 
                    color="primary"
                    onClick={addEducation}
                    disabled={!currentEducation.school || !currentEducation.degree}
                  >
                    Add Education
                  </Button>
                </Grid>
              </Grid>
            </div>
          )}

          {profile.education.length > 0 ? (
            <div className="space-y-4">
              {profile.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-green-500 pl-4 py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <Typography variant="subtitle1" className="font-medium">
                        {edu.school}
                      </Typography>
                      <Typography variant="body2" color="primary">
                        {edu.degree}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {edu.field}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {edu.startDate ? new Date(edu.startDate).toLocaleDateString() : ''} - {edu.endDate ? new Date(edu.endDate).toLocaleDateString() : 'Present'}
                      </Typography>
                    </div>
                    {isEditing && (
                      <IconButton 
                        size="small" 
                        onClick={() => removeEducation(index)}
                        color="error"
                      >
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    )}
                  </div>
                  {edu.description && (
                    <Typography variant="body2" className="mt-2">
                      {edu.description}
                    </Typography>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <Typography color="textSecondary" className="text-center py-4">
              No education added yet
            </Typography>
          )}
        </Paper>

        {/* Links Section */}
        <Paper elevation={3} className="p-6">
          <Typography variant="h6" className="mb-4">Links</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Website"
                name="website"
                value={profile.website}
                onChange={handleInputChange}
                fullWidth
                disabled={!isEditing}
                margin="normal"
                InputProps={{
                  startAdornment: <LinkIcon color="action" className="mr-2" />,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="GitHub"
                name="github"
                value={profile.github}
                onChange={handleInputChange}
                fullWidth
                disabled={!isEditing}
                margin="normal"
                InputProps={{
                  startAdornment: <LinkIcon color="action" className="mr-2" />,
                }}
                placeholder="https://github.com/username"
              />
            </Grid>
          </Grid>
        </Paper>

        {/* Change Password Section */}
        {isEditing && (
          <Paper elevation={3} className="p-6">
            <Typography variant="h6" className="mb-4">Change Password</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  type="password"
                  label="Current Password"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  type="password"
                  label="New Password"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  type="password"
                  label="Confirm New Password"
                  fullWidth
                  margin="normal"
                />
              </Grid>
            </Grid>
          </Paper>
        )}

        {isEditing && (
          <div className="flex justify-end space-x-4 mt-6">
            <Button 
              onClick={() => setIsEditing(false)}
              variant="outlined"
              color="secondary"
            >
              Cancel
            </Button>
            <Button 
              type="submit" 
              variant="contained"
              color="primary"
            >
              Save Changes
            </Button>
          </div>
        )}
      </Box>
  );
};

export default ProfileForm;
